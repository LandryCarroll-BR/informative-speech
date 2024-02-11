'use client'

import * as React from 'react'
import { Step, StepNext, StepPrevious, Stepper, StepperContent, StepperProgress } from './stepper'

const SlideShow: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
	return (
		<Stepper className="flex flex-col min-h-screen w-full">
			<StepperProgress steps={10} className="rounded-none" />
			<StepperContent className="flex-1 flex h-full p-10">
				<Step step={1} className="flex flex-col w-full">
					<div className="flex-1">SLIDE 1</div>
					<div className="ml-auto flex gap-2">
						<StepPrevious>Previous</StepPrevious>
						<StepNext>Next</StepNext>
					</div>
				</Step>
				<Step step={2} className="flex flex-col w-full">
					<div className="flex-1">SLIDE 1</div>
					<div className="ml-auto flex gap-2">
						<StepPrevious>Previous</StepPrevious>
						<StepNext>Next</StepNext>
					</div>
				</Step>
				<Step step={5} className="flex flex-col w-full">
					<div className="flex-1">SLIDE 1</div>
					<div className="ml-auto flex gap-2">
						<StepPrevious>Previous</StepPrevious>
						<StepNext>Next</StepNext>
					</div>
				</Step>
				<Step step={3} className="flex flex-col w-full">
					<div className="flex-1">SLIDE 1</div>
					<div className="ml-auto flex gap-2">
						<StepPrevious>Previous</StepPrevious>
						<StepNext>Next</StepNext>
					</div>
				</Step>
				<Step step={4} className="flex flex-col w-full">
					<div className="flex-1">SLIDE 1</div>
					<div className="ml-auto flex gap-2">
						<StepPrevious>Previous</StepPrevious>
						<StepNext>Next</StepNext>
					</div>
				</Step>
			</StepperContent>
		</Stepper>
	)
}

export { SlideShow }
