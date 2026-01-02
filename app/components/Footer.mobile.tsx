import Link from "next/link";

export default function FooterMobile() {
  return (
    <footer className="bg-[#1B1B1B] text-[#F8F8FF] mt-auto">
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-6">
        <div className="flex flex-col gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">Felix Web Studio</h3>
            <p className="text-[#F8F8FF]/80 text-sm">
              Building websites that help businesses grow.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <div className="space-y-2 text-[#F8F8FF]/80 text-sm">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:hello@felixwebstudio.com"
                  className="hover:text-white transition-colors"
                >
                  hello@felixwebstudio.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  (123) 456-7890
                </a>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-3">Ready to Start?</h3>
            <Link
              href="/contact-us"
              className="inline-block font-bold rounded-full px-6 py-2 text-sm text-foreground transition-colors bg-background hover:underline"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F8F8FF]/20 pt-6 text-center text-[#F8F8FF]/60 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Felix Web Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
