import classNames from 'classnames'
import type { ComponentType, PropsWithChildren, SVGProps } from 'react'

import ArrowDown from '@/assets/icons/fa/arrow-down.svg'
import ArrowUp from '@/assets/icons/fa/arrow-up.svg'
import Check from '@/assets/icons/fa/check.svg'
import ChevronDown from '@/assets/icons/fa/chevron-down.svg'
import ChevronLeft from '@/assets/icons/fa/chevron-left.svg'
import ChevronRight from '@/assets/icons/fa/chevron-right.svg'
import ChevronUp from '@/assets/icons/fa/chevron-up.svg'
import Clock from '@/assets/icons/fa/clock.svg'
import CommentsOutline from '@/assets/icons/fa/comments-outline.svg'
import Comments from '@/assets/icons/fa/comments.svg'
import Eye from '@/assets/icons/fa/eye.svg'
import HashTag from '@/assets/icons/fa/hash-tag.svg'
import Reply from '@/assets/icons/fa/reply.svg'
import Search from '@/assets/icons/fa/search.svg'
import Share from '@/assets/icons/fa/share.svg'
import SwatchBook from '@/assets/icons/fa/swatch-book.svg'
import Trophy from '@/assets/icons/fa/trophy.svg'
import User from '@/assets/icons/fa/user.svg'
import Community from '@/assets/icons/nav-community.svg'
import Docs from '@/assets/icons/nav-docs.svg'
import Features from '@/assets/icons/nav-features.svg'
import Market from '@/assets/icons/nav-market.svg'
import Pricing from '@/assets/icons/nav-pricing.svg'
import NoPicture from '@/assets/no-picture.svg'

export interface IconProps {
  name: IconType
  className?: string
}

export type IconType =
  | 'community'
  | 'features'
  | 'pricing'
  | 'market'
  | 'docs'
  | 'comments'
  | 'comments-outline'
  | 'clock'
  | 'arrow-up'
  | 'arrow-down'
  | 'search'
  | 'user'
  | 'swatch-book'
  | 'chevron-up'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'hashtag'
  | 'no-picture'
  | 'eye'
  | 'share'
  | 'check'
  | 'reply'
  | 'trophy'

const SvgIconMap: {
  [key in IconProps['name']]: ComponentType<
    PropsWithChildren<SVGProps<SVGElement>>
  >
} = {
  community: Community,
  features: Features,
  pricing: Pricing,
  market: Market,
  docs: Docs,
  comments: Comments,
  'comments-outline': CommentsOutline,
  clock: Clock,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  search: Search,
  user: User,
  'swatch-book': SwatchBook,
  'chevron-up': ChevronUp,
  'chevron-down': ChevronDown,
  hashtag: HashTag,
  'no-picture': NoPicture,
  eye: Eye,
  share: Share,
  check: Check,
  reply: Reply,
  trophy: Trophy,
}

/**
 * svg icon component
 */
export default function Icon({ name, className }: IconProps) {
  const SvgIcon = SvgIconMap[name]
  return (
    <SvgIcon
      className={classNames('global-icon inline-block select-none', className)}
      data-cypress={`icon-${name}`}
    />
  )
}
