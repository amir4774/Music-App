import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';

const BackButton = ({ text, prePage }: { text: string, prePage: string }) => {
  return (
    <button type="button" className="btn">
        <Link
          href={prePage}
          className="text-backColor text-lg absolute top-4 left-1 hover:opacity-90"
          title="Back To Home"
        >
          <div className="flex">
            <span className="mr-1 mt-1">
              <FaChevronLeft />
            </span>
            <span className="hidden sm:text-lg sm:block">{text}</span>
          </div>
        </Link>
      </button>
  )
}

export default BackButton
