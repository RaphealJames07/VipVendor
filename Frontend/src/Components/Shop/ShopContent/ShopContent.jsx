
import {HiViewGrid} from 'react-icons/hi'
import {MdViewList} from 'react-icons/md'

const ShopContent = () => {
    return (
        <>
            <div className="w-full">
                <div className="">
                    <div className="">Phones</div>
                    <div className="">
                        <div className="">
                            <label htmlFor="">Sort by</label>
                            <select name="" id="">
                                <option value="">Featured</option>
                                <option value="">Newest Arrival</option>
                                <option value="">Price: Low to High</option>
                                <option value="">Price: High to Low</option>  
                                <option value="">Rating</option>
                            </select>
                        </div>
                        <div className="">
                                <HiViewGrid className="HiViewGrid" />
                                <MdViewList className="MdViewList" />
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </>
    );
};

export default ShopContent;
