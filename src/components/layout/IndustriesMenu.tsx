
import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const IndustriesMenu = () => {
  return (
    <Link to="/industries" className="text-gray-700 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 font-medium flex items-center gap-2">
      <Building2 className="w-4 h-4" />
      Industries
    </Link>
  );
};
