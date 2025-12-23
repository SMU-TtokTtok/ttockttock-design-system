import { type PropsWithChildren } from 'react';
import * as S from '@/ui/tag/tag.css';
import { type TagVariant } from '@/ui/tag/tag.css';

interface TagProps {
  variant: TagVariant;
  className?: string;
}

export function Tag({ variant, children, className, ...props }: PropsWithChildren<TagProps>) {
  const classNames = `${className ?? ''} ${S.baseTagStyle} ${S.tagStyle[variant]}`;
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
