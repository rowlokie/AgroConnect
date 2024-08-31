//import {Shop} from "../schema/Shop.js";


export const registerShop = async (req, res) => {
    try {
        const {shopname,ownername,phoneNumber,organisation,password,location} = req.body;
        if (!shopname || !ownername || !phoneNumber ||!organisation || !password ||!location ) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }
        let shop = await Shop.findOne({ shopname: shopname });
        if (shop) {
            return res.status(400).json({
                message: "Shop already registered",
                success: false
            })
        };
       shop= await Shop.create({
            shopname: shopname,
          ownername:ownername,
          phoneNumber:phoneNumber,
          organisation:organisation,
          password:password,
          location:location,
           
        });

        return res.status(201).json({
            message: "Company registered successfully.",
           shop,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const getShop= async (req, res) => {
    try {
        const userId = req.id; 
       // logged in user id
        const shop = await Shop.find({ userId });
        if (!shop) {
            return res.status(404).json({
                message: "Shops not found.",
                success: false
            })
        }
        return res.status(200).json({
            shop,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
// get company by id
export const getShopById = async (req, res) => {
    try {
        const shopId = req.params.id;
        const shop = await Shop.findById(shopId);
        if (!shop) {
            return res.status(404).json({
                message: "Shop not found.",
                success: false
            })
        }
        return res.status(200).json({
            shop,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const updateShop = async (req, res) => {
    try {
        const { shopname,ownername,phoneNumber,password,organisation,location } = req.body;
 
        const file = req.file;
       
    
        const updateData = { shopname,ownername,phoneNumber,organisation,password,location};

        const shop = await Shop.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!shop) {
            return res.status(404).json({
                message: "Shop not found.",
                success: false
            })
        }
        return res.status(200).json({
            message:"Shop information updated.",
            success:true,
            shop
        })

    } catch (error) {
        console.log(error);
    }
}
