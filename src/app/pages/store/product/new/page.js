"use client";
import IconComponent from "@/components/IconComponents";
import Image from "next/image";
import React, { useState, useRef } from "react";
import BannerImage from "../../../../../../public/assets/images/image-placeholder-removebg-preview.png";
import axios from "axios";
import { useRouter } from "next/navigation";

function Page() {
  const [mainImageProduct, setMainImageProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [postForm, setPostForm] = useState({
    name: '',
    description: '',
    price: '',
    compare_at_price: '',
    margin: '',
    profit: '',
    cost: '',
    variant: '',
    collection: '',
    tags: '',
    vendor: '',
    stock: '',
    status: ''
  });

  const naviagate = useRouter()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostForm({ ...postForm, [name]: value })
  }

  // const inputField = useRef(null)

  // const handleReset = () => {
  //   if (inputField.current) {
  //     inputField.current.value = '';
  //   }
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`, postForm);
      setSuccess('add product success')
      console.log(res)
      console.log("Res", res.data)
      setTimeout(() => {
        naviagate.push('/pages/store/product', {scrollTo: false});
      }, 3500);
    } catch (e) {
      console.log("Error", e);
      console.log(postForm);
      setError('failed to add product');
    } finally {
      setIsLoading(false);
      console.log(postForm);
    }
  }

  const mainImgPreview = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const files = [...event.target.files];
      const previews = [];
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          previews.push(reader.result);
          if (previews.length === files.length) {
            setMainImageProduct(previews);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full grid grid-cols-[400px_400px] gap-2">
          <div className="flex flex-col flex-wrap items-start content-center justify-start">
            <div className="flex self-start items-start flex-nowrap flex-col justify-start gap-2 my-2 bg-white p-4 w-full max-w-[400px] rounded-md">
              <label className="grid grid-cols-1 gap-2 text-medium-sm w-full">
                Title
                <input
                  type="text"
                  name="name"
                  className="form-input bg-white border border-white-light-grey text-cs-dark-blue text-medium-sm rounded-md focus:ring-cs-dark-blue focus:border-cs-dark-blue block w-full p-2"
                  placeholder="Product Title"
                  required
                  onChange={handleChange}
                  value={postForm.name}
                />
              </label>
              <label className="grid grid-cols-1 gap-2 text-medium-sm w-full">
                Description
                <textarea
                  type="textarea"
                  name="description"
                  rows="10"
                  placeholder="Add description here"
                  onChange={handleChange}
                  value={postForm.description}
                  className="resize-none form-textarea bg-white border border-white-light-grey text-cs-dark-blue text-medium-sm rounded-md focus:ring-cs-dark-blue focus:border-cs-dark-blue block w-full p-3"
                />
              </label>
            </div>

            <div className="flex self-start items-start flex-nowrap flex-col justify-start gap-2 my-2 bg-white p-4 w-full max-w-[400px] rounded-md">
              <label className="grid grid-cols-1 gap-2 text-medium-sm w-full">
                Price
                <input
                  type="number"
                  pattern="[0-9]"
                  name="price"
                  className="max-w-[150px] form-input bg-white border border-white-light-grey text-cs-dark-blue text-medium-sm rounded-md focus:ring-cs-dark-blue focus:border-cs-dark-blue block w-full p-2"
                  placeholder="990000"
                  required
                  onChange={handleChange}
                  value={postForm.price}
                />
              </label>
              <label className="grid grid-cols-1 gap-2 text-medium-sm w-full">
                Compare at price
                <input
                  type="number"
                  pattern="[0-9]"
                  name="compare_at_price"
                  className="max-w-[150px] form-input bg-white border border-white-light-grey text-cs-dark-blue text-medium-sm rounded-md focus:ring-cs-dark-blue focus:border-cs-dark-blue block w-full p-2"
                  placeholder="1000000"
                  required
                  onChange={handleChange}
                  value={postForm.compare_at_price}
                />
              </label>
              <div className="flex self-start items-start flex-nowrap flex-row justify-start gap-2 bg-white w-full">
                <label className="grid grid-cols-1 gap-2 text-medium-sm w-full">
                  Cost
                  <input

                    type="number"
                    pattern="[0-9]"
                    name="cost"
                    className="max-w-[150px] form-input bg-white border border-white-light-grey text-cs-dark-blue text-medium-sm rounded-md focus:ring-cs-dark-blue focus:border-cs-dark-blue block w-full p-2"
                    placeholder="99000"
                    required
                    onChange={handleChange}
                    value={postForm.cost}
                  />
                </label>
                <label className="grid grid-cols-1 gap-2 text-medium-sm w-full">
                  Profit
                  <input

                    type="number"
                    pattern="[0-9]"
                    name="profit"
                    className="max-w-[150px] form-input bg-white border border-white-light-grey text-cs-dark-blue text-medium-sm rounded-md focus:ring-cs-dark-blue focus:border-cs-dark-blue block w-full p-2"
                    placeholder="30%"
                    required
                    onChange={handleChange}
                    value={postForm.profit}
                  />
                </label>
                <label className="grid grid-cols-1 gap-2 text-medium-sm w-full">
                  Margin
                  <input

                    type="number"
                    pattern="[0-9]"
                    name="margin"
                    className="max-w-[150px] form-input bg-white border border-white-light-grey text-cs-dark-blue text-medium-sm rounded-md focus:ring-cs-dark-blue focus:border-cs-dark-blue block w-full p-2"
                    placeholder="10%"
                    required
                    onChange={handleChange}
                    value={postForm.margin}
                  />
                </label>
              </div>
            </div>

            <div className="flex self-start items-start flex-nowrap flex-col justify-start gap-2 my-2 bg-white p-4 w-full max-w-[400px] rounded-md">
              <label className="grid grid-cols-1 gap-2 text-medium-sm w-full">
                Inventory
                <input
                  type="number"
                  pattern="[0-9]"
                  name="stock"
                  className="max-w-[150px] form-input bg-white border border-white-light-grey text-cs-dark-blue text-medium-sm rounded-md focus:ring-cs-dark-blue focus:border-cs-dark-blue block w-full p-2"
                  placeholder="100"
                  required
                  onChange={handleChange}
                  value={postForm.stock}
                />
              </label>
            </div>

            <div className="flex self-start items-start flex-nowrap flex-col justify-start gap-2 my-2 bg-white p-4 w-full max-w-[400px] rounded-md relative">
              <div className="absolute right-3 top-3">
                <IconComponent
                  name="MdAddBox"
                  size="20px"
                  color="cs-dark-blue"
                  className="w-fit"
                />
              </div>
              <label className="grid grid-cols-1 gap-2 text-medium-sm w-full">
                Variant
                <input
                  type="text"
                  name="variant"
                  className="form-input bg-white border border-white-light-grey text-cs-dark-blue text-medium-sm rounded-md focus:ring-cs-dark-blue focus:border-cs-dark-blue block w-full p-2"
                  placeholder="Variant Name"
                  required
                  onChange={handleChange}
                  value={postForm.variant}
                />
              </label>
            </div>


            <div className="flex self-start items-start flex-nowrap flex-col justify-start gap-2 my-2 bg-white p-4 w-full max-w-[400px] rounded-md">
              <label className="grid grid-cols-1 gap-2 text-medium-sm w-full">
                Status
                <input
                  type="text"
                  name="status"
                  className="form-input bg-white border border-white-light-grey text-cs-dark-blue text-medium-sm rounded-md focus:ring-cs-dark-blue focus:border-cs-dark-blue block w-full p-2"
                  placeholder="Status"
                  required
                  onChange={handleChange}
                  value={postForm.status}
                />
              </label>
            </div>

          </div>
          <div className="flex flex-col flex-wrap items-start content-center justify-start">
            <div className="flex self-start items-start flex-nowrap flex-col justify-start gap-2 my-2 bg-white p-4 w-full max-w-[400px] rounded-md">
              <div className="grid gap-4">
                <div className="relative">
                  {mainImageProduct ? (
                    <Image
                      src={mainImageProduct}
                      priority
                      className="w-full max-w-full h-full aspect-square object-contain bg-white rounded-md"
                      width={1440}
                      height={600}
                      alt="Picture of the author"
                    />
                  ) : (
                    <Image
                      src={BannerImage}
                      priority
                      className="w-full max-w-full h-full aspect-square object-contain bg-white rounded-md"
                      width={1440}
                      height={600}
                      alt="Picture of the author"
                    />
                  )}
                  <input

                    type="file"
                    name="main_img"
                    className="w-full h-full absolute top-0 left-0 z-10 opacity-0 cursor-cell"
                    onChange={() => {
                    }}
                  />
                </div>
                <div className="grid grid-cols-5 gap-4">
                  <div>
                    <Image
                      src={BannerImage}
                      priority
                      className="w-full h-auto aspect-square object-contain bg-white rounded-md"
                      width={1440}
                      height={600}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <Image
                      src={BannerImage}
                      priority
                      className="w-full h-auto aspect-square object-contain bg-white rounded-md"
                      width={1440}
                      height={600}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <Image
                      src={BannerImage}
                      priority
                      className="w-full h-auto aspect-square object-contain bg-white rounded-md"
                      width={1440}
                      height={600}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <Image
                      src={BannerImage}
                      priority
                      className="w-full h-auto aspect-square object-contain bg-white rounded-md"
                      width={1440}
                      height={600}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <Image
                      src={BannerImage}
                      priority
                      className="w-full h-auto aspect-square object-contain bg-white rounded-md"
                      width={1440}
                      height={600}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex self-start items-start flex-nowrap flex-col justify-start gap-2 my-2 bg-white p-4 w-full max-w-[400px] rounded-md">
              <label className="grid grid-cols-1 gap-2 text-medium-sm w-full">
                Vendor
                <input
                  type="text"
                  name="vendor"
                  className="form-input bg-white border border-white-light-grey text-cs-dark-blue text-medium-sm rounded-md focus:ring-cs-dark-blue focus:border-cs-dark-blue block w-full p-2"
                  placeholder="Vendor Name"
                  required
                  onChange={handleChange}
                  value={postForm.vendor}
                />
              </label>
            </div>

            <div className="flex self-start items-start flex-nowrap flex-col justify-start gap-2 my-2 bg-white p-4 w-full max-w-[400px] rounded-md">
              <label className="grid grid-cols-1 gap-2 text-medium-sm w-full">
                Collection
                <input
                  type="text"
                  name="collection"
                  className="form-input bg-white border border-white-light-grey text-cs-dark-blue text-medium-sm rounded-md focus:ring-cs-dark-blue focus:border-cs-dark-blue block w-full p-2"
                  placeholder="Collection Name"
                  required
                  onChange={handleChange}
                  value={postForm.collection}
                />
              </label>
            </div>

            <div className="flex self-start items-start flex-nowrap flex-col justify-start gap-2 my-2 bg-white p-4 w-full max-w-[400px] rounded-md">
              <label className="grid grid-cols-1 gap-2 text-medium-sm w-full">
                Tags
                <input
                  type="text"
                  name="tags"
                  className="form-input bg-white border border-white-light-grey text-cs-dark-blue text-medium-sm rounded-md focus:ring-cs-dark-blue focus:border-cs-dark-blue block w-full p-2"
                  placeholder="Product Tags"
                  required
                  onChange={handleChange}
                  value={postForm.tags}
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="mr-0 ml-auto w-full max-w-max rounded-md h-fit bg-cs-dark-blue text-white-light-grey font-normal text-[12px] py-2 px-2 uppercase"
            >
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
          </div>
        </div>
      </form>
    </>
  );
}

export default Page;
