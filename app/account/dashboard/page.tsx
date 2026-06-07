"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
    Home,
    Disc3,
    FolderOpen,
    BarChart3,
    MessageSquare,
    Settings,
    LogOut,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

type Artist = {
    real_name: string;
    artist_name: string;
    role: string;
    active_since: number;
    wallet_balance: number;
};

type Release = {
    id: string;
    title: string;
    status: string;
    target_release: string;
};

type Milestone = {
    id: string;
    title: string;
    status: string;
    sort_order: number;
};



export default function DashboardPage() {
    const [loading, setLoading] = useState(true);
    const [artist, setArtist] = useState<Artist | null>(null);
    const [project, setProject] = useState<Release | null>(null);
    const [milestones, setMilestones] = useState<Milestone[]>([]);
    useEffect(() => {
    const loadUser = async () => {
        const {
            data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
            window.location.href = "/account";
            return;
        }
        const { data, error } = await supabase
            .from("artists")
            .select("*")
            .eq("user_id", user.id)
            .maybeSingle();

        console.log("User ID:", user.id);
        console.log("Artist Data:", data);
        console.log("Artist Error:", error);

        const { data: allArtists, error: allArtistsError } = await supabase
            .from("artists")
            .select("*");

        console.log("ALL ARTISTS:", allArtists);
        console.log("ALL ARTISTS ERROR:", allArtistsError);

        setArtist(data);
        const { data: release } = await supabase
            .from("releases")
            .select("*")
            .eq("artist_id", data.id)
            .order("created_at", { ascending: false })
            .limit(1)
            .maybeSingle();

        setProject(release);
        console.log("PROJECT:", release);

        const activeMilestone = milestones.find(
            (m) => m.status === "active"
        );

        if (release) {
            const { data: milestoneData } = await supabase
                .from("release_milestones")
                .select("*")
                .eq("release_id", release.id)
                .order("sort_order");

            setMilestones(milestoneData ?? []);
        }
        setLoading(false);
    };

    loadUser();
}, []);

    if (loading) {
        return (
            <main className="h-screen flex items-center justify-center bg-background">
                <div className="text-secondary-text uppercase tracking-[0.3em] text-sm">
                    Loading Portal...
                </div>
            </main>
        );
    }

    const activeMilestone = milestones.find(
        (m) => m.status === "active"
    );

    return (

        <main className="h-screen bg-background text-primary-text flex overflow-hidden">            {/* Sidebar */}
            <aside className="w-72 h-screen shrink-0 border-r border-white/5 bg-surface/30 backdrop-blur-xl flex flex-col">                <div className="p-8 border-b border-white/5">
          <span className="text-accent text-xs uppercase tracking-[0.4em] block mb-3">
            Artist Portal
          </span>

                    <h1 className="font-playfair text-3xl">
                        CRESTHOLM
                    </h1>

                    <p className="text-secondary-text text-sm mt-3">
                        Artist Management Platform
                    </p>
                </div>

                <nav className="p-6">                    <div className="space-y-2">
                        <SidebarLink
                            icon={<Home size={18} />}
                            label="Dashboard"
                            active
                        />

                        <SidebarLink
                            icon={<Disc3 size={18} />}
                            label="Releases"
                        />

                        <SidebarLink
                            icon={<FolderOpen size={18} />}
                            label="Assets"
                        />

                        <SidebarLink
                            icon={<BarChart3 size={18} />}
                            label="Analytics"
                        />

                        <SidebarLink
                            icon={<MessageSquare size={18} />}
                            label="Messages"
                        />

                        <SidebarLink
                            icon={<Settings size={18} />}
                            label="Settings"
                        />
                    </div>
                </nav>

                <div className="p-6 border-t border-white/5 mt-auto">
                    <div className="bg-accent/5 border border-accent/10 p-4">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                            Artist
                        </p>
                        <h3 className="font-medium">
                            {artist?.artist_name}
                        </h3>

                        <p className="text-xs text-secondary-text mt-1">
                            Authenticated User
                        </p>

                        <button
                            onClick={async () => {
                                await supabase.auth.signOut();
                                window.location.href = "/account";
                            }}
                            className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-text hover:text-accent transition-colors"
                        >
                            <LogOut size={14} />
                            Sign Out
                        </button>

                    </div>
                </div>
            </aside>

            {/* Main Content */}

            <section className="flex-1 h-screen overflow-y-auto relative">                {/* Atmosphere */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle at top left, rgba(180,220,255,0.08), transparent 50%)",
                    }}
                />

                {/* Hero */}

                <div className="relative border-b border-white/5 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span
          className="font-playfair uppercase text-accent/5 tracking-[0.2em]"
          style={{
              fontSize: "18rem",
              lineHeight: 1,
          }}
      >
        PORTAL
      </span>
                    </div>

                    <div className="relative z-10 p-12 md:p-16">
  <span className="text-accent uppercase tracking-[0.5em] text-xs">
    CRESTHOLM ARTIST PORTAL
  </span>

                        <h1 className="font-playfair text-6xl md:text-7xl mt-6 leading-none">
                            Welcome Back,
                            <br />
                            {artist?.real_name}
                        </h1>

                        <p className="text-xl text-secondary-text mt-6">
                            {artist?.artist_name}
                        </p>

                        <div className="flex items-center gap-4 mt-8">
                            <div className="w-16 h-px bg-accent/40" />
                            <div className="w-2 h-2 rotate-45 border border-accent/40" />
                            <div className="w-16 h-px bg-accent/40" />
                        </div>

                        <p className="text-sm uppercase tracking-[0.3em] text-secondary-text mt-8">
                            {artist?.role} • Active Since {artist?.active_since}
                        </p>
                    </div>

                </div>

                <div className="p-12 md:p-16 space-y-10">
                    {/* First Row */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="border border-white/5 bg-surface/20 backdrop-blur-sm p-8">
    <span className="text-accent text-xs uppercase tracking-[0.3em]">
        Artist Wallet
    </span>

                            <h2 className="font-playfair text-5xl mt-6">
                                £{artist?.wallet_balance?.toLocaleString("en-GB", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            }) ?? "0.00"}                            </h2>

                            <p className="text-secondary-text mt-2">
                                Available Balance
                            </p>

                            <div className="space-y-6 mt-8">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-secondary-text">
                                        Lifetime Earnings
                                    </p>

                                    <p className="mt-2">
                                        £{artist?.wallet_balance?.toLocaleString("en-GB", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    }) ?? "0.00"}                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-secondary-text">
                                        Account Status
                                    </p>

                                    <p className="mt-2">
                                        Active
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Artist Record */}
                        <div className="border border-white/5 bg-surface/20 backdrop-blur-sm p-8">
    <span className="text-accent text-xs uppercase tracking-[0.3em]">
      Artist Record
    </span>

                            <h2 className="font-playfair text-4xl mt-4">
                                {artist?.artist_name}
                            </h2>

                            <div className="space-y-6 mt-8">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-secondary-text">
                                        Role
                                    </p>

                                    <p className="mt-2">
                                        {artist?.role}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-secondary-text">
                                        Active Since
                                    </p>

                                    <p className="mt-2">
                                        {artist?.active_since}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-secondary-text">
                                        Assets Available
                                    </p>

                                    <p className="mt-2">
                                        0 Files
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {project ? (
                        <div className="border border-white/5 bg-surface/20 backdrop-blur-sm p-8">
                            <div className="flex items-start justify-between gap-6">
                                <div>
                <span className="text-accent text-xs uppercase tracking-[0.3em]">
                    Active Project
                </span>

                                    <h2 className="font-playfair text-5xl mt-4">
                                        {project.title}
                                    </h2>
                                </div>

                                <div className="text-right">
                                    <p className="text-xs uppercase tracking-[0.3em] text-secondary-text">
                                        Target Release
                                    </p>

                                    <p className="mt-2">
                                        {new Date(project.target_release).toLocaleDateString("en-GB", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}                                    </p>
                                </div>
                            </div>

                            <div className="relative mt-10">
                                {/* Timeline Line */}
                                <div
                                    className="grid gap-4 mt-10"
                                    style={{
                                        gridTemplateColumns: `repeat(${milestones.length}, minmax(0, 1fr))`,
                                    }}
                                >
                                    {milestones.map((milestone, index) => (
                                        <ProjectStage
                                            key={milestone.id}
                                            title={milestone.title}
                                            status={milestone.status as "complete" | "active" | "pending"}
                                            isLast={index === milestones.length - 1}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="border border-white/5 bg-surface/20 backdrop-blur-sm p-8">
        <span className="text-accent text-xs uppercase tracking-[0.3em]">
            Project Timeline
        </span>

                            <div className="py-24 text-center">
                                <h2 className="font-playfair text-5xl">
                                    No Active Projects
                                </h2>

                                <p className="text-secondary-text max-w-lg mx-auto mt-6">
                                    No releases or projects are currently assigned
                                    to this artist account.
                                </p>

                                <div className="flex items-center justify-center gap-4 mt-10">
                                    <div className="w-16 h-px bg-accent/30" />
                                    <div className="w-2 h-2 rotate-45 border border-accent/30" />
                                    <div className="w-16 h-px bg-accent/30" />
                                </div>
                            </div>
                        </div>
                    )}


                    {/* Communications */}
                    <div className="border border-white/5 bg-surface/20 backdrop-blur-sm p-8">
  <span className="text-accent text-xs uppercase tracking-[0.3em]">
    Communications Archive
  </span>

                        <div className="space-y-8 mt-10">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-secondary-text mb-2">
                                    Today
                                </p>

                                <h3>Artist Portal Opened</h3>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-secondary-text mb-2">
                                    Yesterday
                                </p>

                                <h3>Release Workflow Updated</h3>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-secondary-text mb-2">
                                    This Week
                                </p>

                                <h3>Asset Library Available</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

function SidebarLink({
                         icon,
                         label,
                         active = false,
                     }: {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}) {
    return (
        <Link
            href="#"
            className={`flex items-center gap-3 px-4 py-3 transition-all ${
                active
                    ? "bg-accent/10 border-l-2 border-accent text-primary-text"
                    : "text-secondary-text hover:bg-white/5 hover:text-primary-text"
            }`}
        >
            {icon}
            <span>{label}</span>
        </Link>
    );
}

function StatCard({
                      title,
                      value,
                  }: {
    title: string;
    value: string;
}) {
    return (
        <div className="border border-white/5 bg-surface/20 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-text">
                {title}
            </p>

            <h3 className="font-playfair text-5xl mt-4">
                {value}
            </h3>
        </div>
    );
}

function StatusItem({
                        title,
                        status,
                    }: {
    title: string;
    status: string;
}) {
    return (
        <div className="flex justify-between border-b border-white/5 pb-3">
            <span>{title}</span>
            <span className="text-accent">{status}</span>
        </div>
    );
}

function TaskItem({
                      text,
                  }: {
    text: string;
}) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-4 h-4 border border-accent/40" />
            <span>{text}</span>
        </div>
    );
}

function ProjectStage({
                          title,
                          status,
                          isLast,
                      }: {
    title: string;
    status: "complete" | "active" | "pending";
    isLast: boolean;
}) {
    return (
        <div className="relative text-center">
            {!isLast && (
                <div className="absolute top-[8px] left-1/2 w-full h-px bg-white/10" />
            )}

            <div className="relative z-10 flex justify-center">
                <div
                    className={`w-4 h-4 rounded-full ${
                        status === "complete"
                            ? "bg-accent"
                            : status === "active"
                                ? "bg-accent ring-4 ring-accent/20"
                                : "border border-white/20"
                    }`}
                />
            </div>

            <h3 className="mt-6 text-sm">
                {title}
            </h3>

            <p
                className={`mt-2 text-[10px] uppercase tracking-[0.2em] ${
                    status === "active"
                        ? "text-accent"
                        : "text-secondary-text"
                }`}
            >
                {status}
            </p>
        </div>
    );
}


function TimelineItem({
                          title,
                          status,
                          isLast = false,
                      }: {
    title: string;
    status: "complete" | "active" | "pending";
    isLast?: boolean;
}) {
    return ( <div className="flex gap-6"> <div className="flex flex-col items-center">
            {status === "complete" && ( <div className="w-4 h-4 rounded-full bg-accent" />
            )}

            {status === "active" && (
                <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-accent/20" />
            )}

            {status === "pending" && (
                <div className="w-4 h-4 rounded-full border border-white/20" />
            )}

            {!isLast && (
                <div className="w-px flex-1 mt-3 bg-white/10 min-h-[50px]" />
            )}
        </div>

            <div className="pb-4">
                <h3 className="font-medium text-lg">
                    {title}
                </h3>

                <p
                    className={`mt-1 text-sm uppercase tracking-[0.2em] ${
                        status === "complete"
                            ? "text-secondary-text"
                            : status === "active"
                                ? "text-accent"
                                : "text-secondary-text/50"
                    }`}
                >
                    {status}
                </p>
            </div>
        </div>
    );
}


function UpdateItem({
                        title,
                        date,
                    }: {
    title: string;
    date: string;
}) {
    return (
        <div>
            <h4>{title}</h4>
            <p className="text-sm text-secondary-text mt-1">
                {date}
            </p>
        </div>
    );
}

function DashboardButton({
                             children,
                         }: {
    children: React.ReactNode;
}) {
    return (
        <button className="w-full border border-white/10 py-3 text-left px-4 hover:border-accent/30 hover:bg-accent/5 transition-all">
            {children}
        </button>
    );
}

