import { useGetProducts } from "@/services"

const Home = () => {

    const {data}= useGetProducts()

    return (
        <div>
            Home
        </div>
    )
}

export default Home