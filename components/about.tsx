"use client";

import { motion, useInView } from "framer-motion";
import { ClipboardCopyIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { toast } from "sonner";

export default function About() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const ADDRESS = "ASDLKJASDLKJASDO*AUSD(*AUSDOIAJSDLKJ";
	const DEXSCREENER_URL =
		"https://dexscreener.com/solana/asxuurmabxgqpe5pyshresrkba1nmpfnmwgkhi4cqqrh" +
		"?embed=1&amp;theme=dark&amp;trades=0&amp;info=0";
	return (
		<section ref={ref} className='py-24 px-4 relative'>
			{/* Subtle background elements */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute top-1/2 left-0 w-[300px] h-[300px] bg-accent-purple/5 rounded-full blur-[100px]' />
				<div className='absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-teal/5 rounded-full blur-[120px]' />
			</div>

			<div className='max-w-5xl mx-auto relative z-10'>
				<motion.p
					className='text-sm uppercase tracking-[0.2em] text-muted-foreground text-center mb-4'
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					About
				</motion.p>

				<motion.h2
					className='text-3xl md:text-5xl font-bold text-center mb-16 font-[family-name:var(--font-space-grotesk)]'
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					<span className='text-gradient'>WTF is $CEO?</span>
				</motion.h2>

				{/* Two column layout */}
				<div className='grid md:grid-cols-2 gap-8 mb-12'>
					<motion.div
						className='glass rounded-2xl p-8'
						initial={{ opacity: 0, x: -30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<p className='text-md text-foreground/90 leading-relaxed mb-4'>
							Jensen Huang was 30 years old when he founded NVIDIA in 1993. $CEO is an ode to the dream of
							dreams; putting every part of yourself on the line to create the most successful company in the
							history of the human race.
							<br />
							<br />
							Solana is home. It's where community thrives, where generational wealth is made and where movements
							are born from memetic culture like the world has never seen before.
							<br />
							<br />
							What better person is there to lead as the $CEO of Solana?
						</p>
						{/* <p className='text-lg text-foreground/90 leading-relaxed mb-4'>
							Of all the things that I value most about $CEO, intelligence is not top of that list. My ability to
							endure pain and suffering, my ability to work on something for a very, very long period of time, my
							ability to handle setbacks and see the opportunity just around the corner, I consider to be my
							memetic superpowers.
						</p>
						<p className='text-lg font-light text-right text-foreground/90 leading-relaxed'>- Jensen Huang</p> */}
					</motion.div>

					<motion.div
						className='glass rounded-2xl p-8'
						initial={{ opacity: 0, x: 30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						{/* Stats grid */}
						<div className='grid grid-cols-2 gap-4'>
							{[
								{ label: "Holders", value: "69,420+" },
								{ label: "Memes Made", value: "Infinite" },
								{ label: "Rugs Pulled", value: "0 (so far)" },
								{ label: "Vibes", value: "Immaculate" },
							].map((stat, index) => (
								<motion.div
									key={stat.label}
									className='text-center p-4 rounded-xl bg-background/50'
									initial={{ opacity: 0, scale: 0.9 }}
									animate={isInView ? { opacity: 1, scale: 1 } : {}}
									transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
								>
									<div className='text-xl md:text-2xl font-bold text-gradient'>{stat.value}</div>
									<div className='text-xs text-muted-foreground uppercase tracking-wider mt-1'>
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				{/* Disclaimer */}
				<motion.div
					className='glass rounded-xl p-6 border border-accent-purple/20'
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.5 }}
				>
					<p className='text-center text-sm text-muted-foreground'>
						<span className='text-accent-purple font-medium'>Not financial advice</span> — obviously.
						<br /> We're just a bunch of AI nerds building GPUs from scratch in our moms basements. <br />
						DYOR or whatever.
					</p>
				</motion.div>
			</div>
			<div className='flex flex-col lg:flex-row items-center justify-center gap-6 pt-10 sm:gap-8 lg:gap-12 max-w-6xl mx-auto'>
				<div className='w-full aspect-[16/10] sm:aspect-[16/9] rounded-lg overflow-hidden border-4 border-accent shadow-2xl'>
					<iframe
						src='https://dexscreener.com/solana/6v8vmorspb7qyg34gnq6bcxituhuu2rs6drjggeevzcx?embed=1&amp;theme=dark&amp;trades=0&amp;info=0'
						className='w-full h-full'
						title='DexScreener Live Chart'
						allowFullScreen
					/>
				</div>
				<div>
					<Image
						src='/ceo/CEO-STONKS.png'
						alt='DexScreener Live Chart'
						width={640}
						height={360}
						className='rounded-md'
					/>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row items-center justify-center gap-6 pt-10 sm:gap-8 lg:gap-12 max-w-6xl mx-auto'>
				<div className='w-fit px-4 py-2 flex flex-row gap-2 rounded-md border-2 border-accent shadow-lg bg-background/70'>
					<h1>CA: ${ADDRESS}</h1>
					<button
						onClick={() => {
							navigator.clipboard.writeText(ADDRESS);
							toast.success("Contract address copied to clipboard!");
						}}
						className='p-1 rounded-md hover:bg-accent-purple/10 transition'
					>
						<ClipboardCopyIcon size={18} />
					</button>
				</div>
			</div>
		</section>
	);
}
