import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import Loading from "../assets/loading4.webm";
import FilterSection from "../components/FilterSection";
import ProductsCard from "../components/ProductsCard";
import Pagination from "../components/Pagination";
import Lottie from "lottie-react";
import notfound from "../assets/notfound.json";
import MobileFilter from "../components/MobileFilter";
import { set } from "react-hook-form";
import { i } from "framer-motion/client";

export default function Products() {
    const { data, fetchAllProducts } = useContext(DataContext);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [brand, setBrand] = useState("All");
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [page, setPage] = useState(1);
    const [openFilter, setOpenFilter] = useState(false);

    useEffect(() => {
        fetchAllProducts()
        window.scrollTo(0, 0);
    }, []);

    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value);
        setPage(1);
        setOpenFilter(false);
    };

    const handleBrandChange = (e) => {
        setBrand(e.target.value);
        setPage(1);
        setOpenFilter(false)
    };

    const pageHandle = (selectedPage) => {
        setPage(selectedPage);
        window.scrollTo(0, 0);
    }

    const filteredData = data?.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (categoryFilter === "All" || item.category === categoryFilter) &&
            (brand === "All" || item.brand === brand) &&
            item.price >= priceRange[0] &&
            item.price <= priceRange[1];
    }) || [];

    const dynamicPage = Math.ceil(filteredData.length / 8);
    return (
        <div>
            <div className="mx-w-6xl mx-auto px-4 mb-10 ">
                <MobileFilter openFilter={openFilter} setOpenFilter={setOpenFilter} search={searchTerm} setSearch={setSearchTerm} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} handleBrandChange={handleBrandChange} handleCategoryChange={handleCategoryChange}/>
                {
                    data && data.length > 0 ? (
                        <>
                            <div className="flex gap-8">
                                <FilterSection search={searchTerm} setSearch={setSearchTerm} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} handleBrandChange={handleBrandChange} handleCategoryChange={handleCategoryChange} />
                                {
                                    filteredData?.length > 0 ? (
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7 mt-10">
                                                {
                                                    filteredData?.slice(page * 8 - 8, page * 8).map((product, index) => {
                                                        return <ProductsCard key={index} product={product} />;
                                                    })
                                                }
                                            </div>
                                            <Pagination dynamicPage={dynamicPage} pageHandle={pageHandle} page={page} />
                                        </div>
                                    ) : (
                                        <div className="flex justify-center items-center md:h-[600px] md:w-[900px] mt-10">
                                            <Lottie animationData={notfound} className="w-full h-full" />
                                        </div>
                                    )
                                }

                            </div>
                           
                        </>
                    ) : (
                        <div className="flex items-center justify-center h-[400px]">
                            <video muted autoPlay loop >
                                <source src={Loading} type="video/webm" />
                            </video>
                        </div>
                    )
                }
            </div>
        </div>
    );
}