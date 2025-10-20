'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { forwardRef, type Ref, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';

interface ButtonBaseProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  asChild?: boolean;
}

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-surface hover:bg-accent/90 shadow-glow',
        secondary: 'bg-white/5 text-text hover:bg-white/10',
        ghost: 'border-transparent hover:bg-white/5'
      },
      size: {
        md: 'text-sm',
        lg: 'text-base px-7 py-3.5'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

function Button(
  { variant, size, className, href, asChild, ...props }: ButtonBaseProps,
  ref: Ref<HTMLButtonElement>,
) {
  if (href && !asChild) {
    return (
      <Link href={href} legacyBehavior>
        <a className={buttonVariants({ variant, size, className })} {...props}>
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <button ref={ref} className={buttonVariants({ variant, size, className })} {...props} />
  );
}

export const AppButton = forwardRef(Button);
