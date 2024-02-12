'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { Button, ButtonProps } from './ui/button'
import { Progress } from './ui/progress'
import { ProgressProps } from '@radix-ui/react-progress'

type StepperContextValue = {
	currentStep: number
	incrementStep: () => void
	decrementStep: () => void
}

const StepperContext = React.createContext<StepperContextValue>({} as StepperContextValue)

const useStepper = () => {
	const stepperContext = React.useContext(StepperContext)

	if (!stepperContext) throw new Error('stepperContext must be used within <Stepper>')

	return stepperContext
}

interface StepperProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
	children: ((state: StepperContextValue) => React.ReactNode) | React.ReactNode
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(({ children, ...props }, ref) => {
	const [currentStep, setCurrentStep] = React.useState(1)

	const incrementStep = () => setCurrentStep(currentStep + 1)
	const decrementStep = () => setCurrentStep(currentStep - 1)

	if (typeof children === 'function')
		return (
			<StepperContext.Provider value={{ currentStep, incrementStep, decrementStep }}>
				<div ref={ref} {...props}>
					{children({ currentStep, incrementStep, decrementStep })}
				</div>
			</StepperContext.Provider>
		)

	return (
		<StepperContext.Provider value={{ currentStep, incrementStep, decrementStep }}>
			<div ref={ref} {...props}>
				{children}
			</div>
		</StepperContext.Provider>
	)
})

Stepper.displayName = 'Stepper'

type StepperContentProps = React.HTMLAttributes<HTMLDivElement>

const StepperContent = React.forwardRef<HTMLDivElement, StepperContentProps>(
	({ children, ...props }, ref) => (
		<div ref={ref} {...props}>
			{children}
		</div>
	)
)

StepperContent.displayName = 'StepperContent'

interface StepProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
	step: number
	children: ((state: StepperContextValue) => React.ReactNode) | React.ReactNode
}

const Step = React.forwardRef<HTMLDivElement, StepProps>(
	({ children, className, step, ...props }, ref) => {
		const state = useStepper()

		const isActive = state.currentStep === step

		if (typeof children !== 'function')
			return (
				<>
					{isActive && (
						<div ref={ref} className={cn('w-full', className)} {...props}>
							{children}
						</div>
					)}
				</>
			)

		return (
			<>
				{state.currentStep === step && (
					<div ref={ref} className={cn('', className)} {...props}>
						{children(state)}
					</div>
				)}
			</>
		)
	}
)

Step.displayName = 'Step'

interface StepLabelProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
	step: number
	label?: string
}

type Status = 'active' | 'inactive' | 'complete'

const StepLabel = React.forwardRef<HTMLDivElement, StepLabelProps>(
	({ step, className, label }, ref) => {
		const { currentStep } = useStepper()

		const status = currentStep === step ? 'active' : currentStep < step ? 'inactive' : 'complete'

		return (
			<div className="flex flex-col items-center justify-center">
				<motion.div animate={status} className={cn(className, 'relative w-fit')} ref={ref}>
					<motion.div
						variants={{
							active: {
								scale: 1,
								transition: {
									delay: 0,
									duration: 0.2,
								},
							},
							complete: {
								scale: 1.25,
							},
						}}
						transition={{
							duration: 0.6,
							delay: 0.2,
							type: 'tween',
							ease: 'circOut',
						}}
						className="absolute inset-0 rounded-full bg-primary/30"
					/>
					<motion.div
						initial={false}
						variants={{
							inactive: {
								backgroundColor: 'hsla(var(--muted))',
								borderColor: 'hsla(var(--border))',
								color: 'hsla(var(--muted-foreground))',
							},
							active: {
								backgroundColor: 'hsla(var(--muted))',
								borderColor: 'hsla(var(--primary))',
								color: 'hsla(var(--primary--foreground))',
							},
							complete: {
								backgroundColor: 'hsla(var(--primary))',
								borderColor: 'hsla(var(--primary))',
								color: 'hsla(var(--primary-foreground))',
							},
						}}
						transition={{ duration: 0.2 }}
						className="relative flex h-10 w-10 items-center justify-center rounded-full border font-semibold"
					>
						<div className="flex items-center justify-center relative">
							<motion.div
								initial={{ opacity: 0 }}
								variants={{
									inactive: { opacity: 0 },
									active: { opacity: 0 },
									complete: { opacity: 1 },
								}}
							>
								<CheckIcon className="h-6 w-6 text-primary-foreground" status={status} />
							</motion.div>
							<motion.div
								initial={{ opacity: 1 }}
								variants={{
									inactive: { opacity: 1 },
									active: { opacity: 1 },
									complete: { opacity: 0 },
								}}
								className="absolute inset-0 w-full h-full flex items-center justify-center"
							>
								{step}
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
				{label && <div className="text-muted-foreground text-[10px] uppercase pt-2">{label}</div>}
			</div>
		)
	}
)

StepLabel.displayName = 'StepLabel'

const StepNext = React.forwardRef<HTMLButtonElement, ButtonProps>(({ onClick, ...props }, ref) => {
	const { incrementStep } = useStepper()

	return <Button ref={ref} onClick={incrementStep} {...props} />
})
StepNext.displayName = 'StepNext'

const StepPrevious = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ onClick, ...props }, ref) => {
		const { currentStep, decrementStep } = useStepper()

		return (
			<Button
				ref={ref}
				onClick={decrementStep}
				disabled={currentStep === 1}
				variant={'secondary'}
				{...props}
			/>
		)
	}
)
StepPrevious.displayName = 'StepPrevious'

// Stepper Progress
const StepperProgress: React.FC<ProgressProps & { steps: number }> = ({ steps, ...props }) => {
	const { currentStep } = useStepper()
	const increment = (currentStep - 1) / (steps - 1)
	const progress = Math.ceil(increment * 100)
	return <Progress value={progress} {...props} />
}
StepperProgress.displayName = 'StepperProgress'

interface CheckIconProps extends React.ComponentProps<'svg'> {
	status: Status
}

const CheckIcon: React.FC<CheckIconProps> = ({ status, ...props }) => {
	return (
		<svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
			<motion.path
				initial={{ pathLength: 0 }}
				animate={{ pathLength: status === 'complete' ? 1 : 0 }}
				transition={{
					delay: 0.2,
					type: 'tween',
					ease: 'easeOut',
					duration: 0.3,
				}}
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M5 13l4 4L19 7"
			/>
		</svg>
	)
}

CheckIcon.displayName = 'CheckIcon'

export { Stepper, StepperContent, StepLabel, StepNext, StepPrevious, Step, StepperProgress }
