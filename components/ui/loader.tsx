import { Loader2 } from 'lucide-react'
import {cva, type VariantProps} from "class-variance-authority"
import { cn } from '@/lib/utils'


const laoderVariants = cva(
    "text-muted-foreground animate-spin", {
        variants: {
            sizes: {
                default: "h-5 w-5",
                sm: "h-4 w-4",
                lg: "h-6 w-6",
                xl: "h-10 w-10",
                
            }
        },
        defaultVariants: {
            sizes: "default"
        }
    }
)

interface loaderProps extends VariantProps<typeof laoderVariants>{}

export const Loader = ({sizes}: loaderProps) => {


  return (
    <Loader2 className={cn(laoderVariants({sizes}))}>Loader</Loader2>
  )
}
