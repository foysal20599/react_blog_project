import { ImArrowRight2 } from "react-icons/im";
export default function postnav() {
  return (
    <div className="bg-gray-600">
      {CardCategory()}
      {CardCategory()}
      {CardCategory()}
      {CardCategory()}
      {CardCategory()}
      {CardCategory()}
      {CardCategory()}
      {CardCategory()}
      {CardCategory()}
      {CardCategory()}
      {CardCategory()}
      {CardCategory()}
      {CardCategory()}
      {CardCategory()}
      {CardCategory()}
    </div>
  );
}

function CardCategory() {
  return (
    <div className="hover:bg-gray-900 border flex cursor-pointer">
      <div className="flex-auto w-80 p-5">
        <h1 className="hover:text-orange-900">Business Category</h1>
      </div>
      <div className="flex-auto w-15 p-5 icon">
        <span className="icon">
          <ImArrowRight2 className="hover:text-orange-900" />
        </span>
      </div>
    </div>
  );
}
