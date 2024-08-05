import { introCond } from "@/app/page"
import Link from "next/link"
import { Logo } from "../Logo/ui"
import { Input } from "../ui/input"
import { IconBrandTelegram } from '@tabler/icons-react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { cn } from "@/app/lib/utils"

export const Footer = () => {
    return (
        <footer className="border-t border-white/[0.15] flex justify-center mt-24">
            <div className="container pb-6 pt-12 flex justify-between">
                <div className="flex flex-col gap-12">
                    <Link href='/' className="flex items-center gap-6 text-5xl">
                        <Logo size="small" />
                        <span className={`${introCond.className} text-white`}>triodem</span>
                    </Link>
                    <span className="text-zinc-400">© {new Date().getFullYear()} Partners' Club Inc.</span>
                </div>
                <div className="flex gap-24">
                    <div className="flex flex-col gap-2">
                        <span className="text-lg font-semibold text-white">Контакты</span>
                        <span className="text-zinc-400 text-sm">+7(912)-155-15-42</span>
                        <div className="flex gap-3 mt-1">
                            <Link href='' className="p-2 rounded-full bg-white/[0.15] transition hover:bg-white/[0.10]">
                                <IconBrandTelegram width={22} className="text-[#A3A3A3]" />
                            </Link>
                            <Link href='' className="p-2 rounded-full bg-white/[0.15] transition hover:bg-white/[0.10]">
                                <IconBrandWhatsapp width={22} className="text-[#A3A3A3]" />  
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 max-w-80">
                        <span className="text-lg font-semibold text-white">Подписаться на рассылку</span>
                        <span className="text-zinc-400 text-sm">Будьте в курсе новых релизов и функций, руководств и тематических исследований.</span>
                        <LabelInputContainer className="mt-2">
                            <Input
                                id="email"
                                placeholder="Ваш email"
                                type="email"
                            />
                        </LabelInputContainer>
                    </div>
                </div>
            </div>
        </footer>
    )
}


const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };