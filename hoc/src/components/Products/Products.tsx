import Loader from "../Loader/Loader";

interface ProductsProps {
  loading: boolean;
}

const Products: React.FC<ProductsProps> = ({ loading }) => {
  if (loading) return <Loader />;

  return <div className="text-lg font-semibold">Products Loaded</div>;
};

export default Products;
