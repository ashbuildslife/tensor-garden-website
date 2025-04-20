
import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const industries = [
  {
    title: "Healthcare & Insurance",
    description: "Transform patient care and risk assessment with AI",
    href: "/industries/healthcare"
  },
  {
    title: "Financial Services",
    description: "Optimize trading and risk management workflows",
    href: "/industries/finance"
  },
  {
    title: "Manufacturing",
    description: "Enhance productivity and reduce operational costs",
    href: "/industries/manufacturing"
  },
  {
    title: "Retail & E-commerce",
    description: "Personalize customer experiences at scale",
    href: "/industries/retail"
  }
];

export const IndustriesMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400 font-medium flex items-center gap-2 bg-transparent hover:bg-transparent">
            <Building2 className="w-4 h-4" />
            Industries
          </NavigationMenuTrigger>
          <NavigationMenuContent className="z-50">
            <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
              {industries.map((industry) => (
                <Link
                  key={industry.href}
                  to={industry.href}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-100"
                >
                  <div className="text-sm font-medium leading-none text-teal-600 dark:text-teal-400 mb-1">{industry.title}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-300">
                    {industry.description}
                  </p>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
