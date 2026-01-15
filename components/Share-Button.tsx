"use client";

import {
    WhatsappShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailShareButton,
} from "react-share";

import {
    WhatsappIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    EmailIcon,
} from "react-share";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface ShareDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ShareDialog({ open, onOpenChange }: ShareDialogProps) {
    const shareUrl =
        typeof window !== "undefined" ? window.location.href : "";

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md rounded-xl">
                <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                </DialogHeader>

                {/* Share Options */}
                <div className="grid grid-cols-4 gap-6 py-6 text-center">
                    <div>
                        <WhatsappShareButton url={shareUrl}>
                            <WhatsappIcon size={48} round />
                        </WhatsappShareButton>
                        <p className="mt-2 text-sm">WhatsApp</p>
                    </div>

                    <div>
                        <FacebookShareButton url={shareUrl}>
                            <FacebookIcon size={48} round />
                        </FacebookShareButton>
                        <p className="mt-2 text-sm">Facebook</p>
                    </div>

                    <div>
                        <TwitterShareButton url={shareUrl}>
                            <TwitterIcon size={48} round />
                        </TwitterShareButton>
                        <p className="mt-2 text-sm">Twitter</p>
                    </div>

                    <div>
                        <LinkedinShareButton url={shareUrl}>
                            <LinkedinIcon size={48} round />
                        </LinkedinShareButton>
                        <p className="mt-2 text-sm">LinkedIn</p>
                    </div>

                    <div>
                        <EmailShareButton url={shareUrl}>
                            <EmailIcon size={48} round />
                        </EmailShareButton>
                        <p className="mt-2 text-sm">Gmail</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
