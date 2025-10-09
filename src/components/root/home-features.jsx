'use client'

import Link from "next/link"

export default function HomeFeatures() {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-14" >
            <ul
                role="list"
                className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                <li className="group relative flex flex-col items-start border border-zinc-100 dark:border-zinc-700/70 rounded-lg py-6 px-4 overflow-hidden w-full">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">

                        <span
                            className="h-11 w-11 flex items-center justify-center rounded-full bg-green-700 text-white text-2xl font-bold select-none"
                            aria-label={`R`}
                        >
                            {"R"}
                        </span>
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                        <Link href={``}>
                            <span className="relative z-10">{`Risk Manager`}</span>
                        </Link>
                    </h2>

                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Never over-leverage again. Auto-calculate lot size based on your balance, risk % and stop-loss.
                    </p>
                </li>

                <li className="group relative flex flex-col items-start border border-zinc-100 dark:border-zinc-700/70 rounded-lg py-6 px-4 overflow-hidden w-full">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">

                        <span
                            className="h-11 w-11 flex items-center justify-center rounded-full bg-green-700 text-white text-2xl font-bold select-none"
                            aria-label={`R`}
                        >
                            {"J"}
                        </span>
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                        <Link href={``}>
                            <span className="relative z-10">{`Journal & Analytics`}</span>
                        </Link>
                    </h2>

                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Log trades automatically.Review performance with win rates, R:R charts and weekly reports.
                    </p>
                </li>

                <li className="group relative flex flex-col items-start border border-zinc-100 dark:border-zinc-700/70 rounded-lg py-6 px-4 overflow-hidden w-full">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">

                        <span
                            className="h-11 w-11 flex items-center justify-center rounded-full bg-green-700 text-white text-2xl font-bold select-none"
                            aria-label={`P`}
                        >
                            {"P"}
                        </span>
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                        <Link href={``}>
                            <span className="relative z-10">{`Prop Firm Mode`}</span>
                        </Link>
                    </h2>

                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Simulate FTMO, The5ers and more. Stay within rules with daily loss limits and track your challenge progress.
                    </p>
                </li>
            </ul>
        </div >
    );
}