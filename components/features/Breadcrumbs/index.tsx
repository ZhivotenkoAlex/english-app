'use client'
import React, { useMemo, useCallback } from 'react'
import styled from 'styled-components'
import { NextRouter } from 'next/router'
import { Breadcrumbs } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ROUTES from '@/helpers/routes'

type Crumb = {
  title?: string
  href?: string
}

type Props = {
  router?: NextRouter // Router object
  maxItems?: number // Specifies the maximum number of breadcrumbs to display. 2 by default
  customName?: string // Specifies the breadcrumb title if we need display different breadcrumb title than in the route
  isCustomBreadCrumbs?: boolean
  customCrumbs?: Crumb[]
}

function BreadCrumbs({ maxItems = 3, customName, isCustomBreadCrumbs, customCrumbs }: Props) {
  const pathname = usePathname()
  const cleanParts = useMemo(() => pathname.split('/'), [pathname])

  const pathsWithHidedBreadcrumbs = [ROUTES.HOME, ROUTES.SIGN_IN, ROUTES.SIGN_UP]
  const isBreadcrumbsShown = !pathsWithHidedBreadcrumbs.includes(pathname as ROUTES)

  const routeCrumbs = useMemo(
    () =>
      cleanParts.map(part => {
        const title = part === '' ? 'Home' : part.replace(/[-,_]/g, ' ')
        const href = part === '' ? '/' : part
        return {
          title,
          href,
        }
      }),
    [cleanParts],
  )

  const crumbs = isCustomBreadCrumbs ? (customCrumbs as Crumb[]) : routeCrumbs

  const isLast = useCallback(
    (idx: number) =>
      customCrumbs ? customCrumbs.length === idx + 1 : cleanParts.length === idx + 1,
    [cleanParts, customCrumbs],
  )

  const linkTitle = useCallback(
    (idx: number, crumbName: Crumb) => (isLast(idx) && customName ? customName : crumbName.title),
    [customName, isLast],
  )

  const linkHref = useCallback(
    (crumbName: Crumb) => (crumbName.title === 'Home' ? `${crumbName.href}` : `/${crumbName.href}`),
    [],
  )

  const isDisabled = useCallback(
    (crumbName: Crumb, idx: number) => (isLast(idx) || crumbName.href === '' ? 'div' : 'a'),
    [isLast],
  )

  //returns breadcrumbs layout only if isBreadcrumbsShown is true

  return (
    isBreadcrumbsShown && (
      <Root>
        <StyledBreadcrumbs maxItems={maxItems}>
          {crumbs.map((crumbName, idx) => {
            return (
              <Crumb
                key={idx}
                $last={isLast(idx)}
                href={linkHref(crumbName)}
                as={isDisabled(crumbName, idx)}
              >
                <LinkTitle>{linkTitle(idx, crumbName)}</LinkTitle>
              </Crumb>
            )
          })}
        </StyledBreadcrumbs>
      </Root>
    )
  )
}

export default BreadCrumbs

const Root = styled(Breadcrumbs)``

const StyledBreadcrumbs = styled(Breadcrumbs)`
  .MuiBreadcrumbs-ol {
    @media (max-width: 767px) {
      max-width: 328px;
    }
  }
  .MuiBreadcrumbs-li {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:last-of-type {
      flex: 1;
    }
  }
`

const Crumb = styled(Link)<{ $last: boolean }>`
  color: ${props => (props.$last === true ? '#000000DE !important' : '#00000099 !important')};
  cursor: ${props => (props.$last === true ? 'default' : 'pointer')};
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.15px;
`

const LinkTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.15px;
`
