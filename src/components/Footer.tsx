import Link from "next/link";
import { Globe, Linkedin, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background text-foreground" id="footer">
      <div className="flex flex-col gap-4 justify-center max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          <div className="flex flex-col lg:gap-12 lg:justify-between col-span-2">
            <Logo />
            <div className="flex flex-col gap-2 mt-4">
              <h6 className="text-base mb-0 text-foreground">Follow us</h6>
              <div className="flex gap-2 flex-wrap">
                <a className="btn size-10 border border-border bg-background hover:bg-accent" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin className="size-4" />
                </a>
                <a className="btn size-10 border border-border bg-background hover:bg-accent" href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <MessageCircle className="size-4" />
                </a>
                <a className="btn size-10 border border-border bg-background hover:bg-accent" href={site.marketingUrl} target="_blank" rel="noreferrer" aria-label="Website">
                  <Globe className="size-4" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h6 className="font-semibold mb-3">Browse</h6>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/courses">All Courses</Link></li>
              <li><Link href="/ebooks">E-Books</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/digital-products">Digital Products</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-3">Company</h6>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
              <li><a href={site.marketingUrl} target="_blank" rel="noreferrer">skillora.co.in</a></li>
              <li><a href={site.phoneHref}>{site.phone}</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-3">Support</h6>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/login">Sign in</Link></li>
              <li><Link href="/dashboard">My learning</Link></li>
              <li><Link href="/admin">Instructor login</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-3">Legal</h6>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/terms">Terms of service</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/refund-policy">Refund policy</Link></li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-muted-foreground pt-4 border-t">
          © {new Date().getFullYear()} Skillora. {site.address}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
