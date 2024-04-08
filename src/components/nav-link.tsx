import { ComponentProps } from "react"

interface PropsNavLink extends ComponentProps<'a'> {
  children: string
}

export function NavLink (props: PropsNavLink) {
  return (
    <a {...props} className='font-medium text-sm'>
      {props.children}
    </a>
  )
}