'use client'

import * as React from 'react'
import { Step, StepNext, StepPrevious, Stepper, StepperContent, StepperProgress } from './stepper'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const steps = [
	{
		title: 'How do we know what is real?',
		images: [
			'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg',
			'https://images.pexels.com/photos/4009626/pexels-photo-4009626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			'https://images.unsplash.com/photo-1593240637899-5fc06c754c2b?q=80&w=1594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
		content: (
			<>
				<h3 className="text-secondary-foreground">Exploration Through a Thought Experiment</h3>
				<ul className="text-secondary-foreground">
					<li>Rene Descartes&apos; Methodology</li>
					<li>Descartes&apos; Thought Experiment</li>
					<li>Descartes&apos; Conclusion</li>
				</ul>
			</>
		),
	},
	{
		title: 'Rene Descartes (1596-1650)',
		images: [
			'https://cdn.britannica.com/57/215357-138-BCF2F67C/Top-questions-answers-Rene-Descartes.jpg?w=800&h=450&c=crop',
		],
		content: (
			<>
				<h3 className="text-secondary-foreground">Methodology</h3>
				<p className={cn('prose text-muted-foreground font-serif')}>
					Descartes&apos; skepticism emerged during the writing of his <em>Meditations</em>, where
					he embarked on a quest to ascertain what could be known with certainty. He discerned that
					any experience open to doubt couldn&apos;t be considered unequivocally true. The act of
					doubting a single belief destabilized its certainty. This insight motivated him to search
					for at least one indisputable belief to anchor his understanding, prompting an
					intellectual purge akin to an epistemic &quot;house cleaning&quot; (Descartes 144-145).
				</p>
			</>
		),
	},
	{
		title: 'Fires, Dreams, & Evil Demons',
		images: [
			'https://images.unsplash.com/photo-1534956454704-f151f87f6717?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1560942485-b2a11cc13456?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
		content: (
			<>
				<h3 className="text-secondary-foreground">Descartes&apos; Thought Experiment</h3>
				<p className="prose text-muted-foreground font-serif">
					Descartes delved into reality&apos;s nature, challenging certainty in external and
					internal perceptions. He questioned the reliability of physical sensations by comparing
					them to dreams, suggesting all might be illusory. Additionally, he entertained the notion
					of an evil force manipulating thoughts, casting doubt on the reliability of mental
					perceptions. This challenges our understanding of reality&apos;s certainty.
				</p>
			</>
		),
	},
	{
		title: 'I Think, Therfore I Am',
		images: [
			'https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
		content: (
			<>
				<h3 className="text-secondary-foreground">
					Descartes&apos; Escape from Radical Skepticism
				</h3>
				<p className="prose text-muted-foreground font-serif">
					Descartes found solace in one certainty amidst his doubts — the existence of oneself.
					Amidst sensory experiences and thoughts, he realized that regardless of the truth of his
					perceptions, the fact of his own existence remained undeniable. He asserted in Mediation
					II, &quot;I am, I exist, that is certain.&quot; His continuous thinking affirmed his
					existence, establishing it as an indubitable truth.
				</p>
			</>
		),
	},
	// {
	// 	title: 'What do you think?',
	// 	images: [
	// 		// 'https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	// 	],
	// 	content: (
	// 		<>
	// 			<h3 className="text-secondary-foreground">
	// 				Descartes&apos; Escape from Radical Skepticism
	// 			</h3>
	// 			<p className="prose text-muted-foreground font-serif">
	// 				Descartes found solace in one certainty amidst his doubts — the existence of oneself.
	// 				Amidst sensory experiences and thoughts, he realized that regardless of the truth of his
	// 				perceptions, the fact of his own existence remained undeniable. He asserted in Mediation
	// 				II, &quot;I am, I exist, that is certain.&quot; His continuous thinking affirmed his
	// 				existence, establishing it as an indubitable truth.
	// 			</p>
	// 		</>
	// 	),
	// },
]

const SlideShow: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
	return (
		<Stepper className="flex flex-col min-h-screen">
			{({ currentStep }) => (
				<React.Fragment>
					<StepperProgress steps={steps.length} className="rounded-none" />
					<StepperContent className="flex-1 flex p-10 container">
						{steps.map(({ title, content, images }, index) => (
							<Step step={index + 1} className="flex flex-col w-full" key={title}>
								<h2 className="text-2xl font-semibold">{title}</h2>
								<div className="flex-1 my-8 w-full h-full flex gap-6">
									{images.map((image) => (
										<div
											key={image}
											className="relative border-4 border-border/30 outline-[1px] outline outline-secondary-foreground/10 rounded-2xl overflow-hidden w-full h-full hover:scale-[103%] shadow hover:translate-y-[2%] transition-all duration-300 hover:shadow-xl"
										>
											<Image src={image} alt="slide-1" fill className="object-cover" />
										</div>
									))}
								</div>
								<div className="prose mt-auto pb-10">{content}</div>
							</Step>
						))}
					</StepperContent>
					<div className="fixed bottom-0 w-full py-10">
						<div className="container flex w-full gap-3">
							<StepPrevious className="ml-auto">Previous</StepPrevious>
							<StepNext disabled={currentStep === steps.length} className="mr-2">
								Next
							</StepNext>
						</div>
					</div>
				</React.Fragment>
			)}
		</Stepper>
	)
}

export { SlideShow }
