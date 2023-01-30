"use client";

import React, { ReactNode } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link";

interface TabsProps {
    tabs: Tab[]
}

interface Tab {
    /**
     * todo: Find how to add the type default
     */
    name: string;
    displayName: string;
    body: ReactNode;
}

function Tabs({ tabs }: TabsProps) {
    const searchParams = useSearchParams()
    const tab = searchParams.get("tab");

    const selectedTab = tabs.find((t) => t.name === tab) || tabs.find(t => t.name === "default")

    return (
        <div>
            <div>
                {tabs.map(t => <div key={t.name}>
                    <Link href={{ pathname: "/", query: { tab: t.name } }}>
                        {t.displayName}
                    </Link>
                </div>)}
            </div>
            <div>
                {selectedTab.body}
            </div>
        </div>
    )
}

export default Tabs