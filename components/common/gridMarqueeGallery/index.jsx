"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import Slider from "react-slick";
import styles from "./style.module.scss";

const GridMarqueeGallery = ({props}) => {
  console.log("nnn", props);
  const { theme, setTheme } = useContext(MyContext);
  const settings = {
    speed: 20000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
  };
  return (
    <section
      className={`${styles.gridMarqueeGallery} ${
        theme ? styles.ourGalleryDark : ""
      }`}
    >
      <Slider {...settings}>
        <div>
          <div className={cn(styles.galleryImages, "row")}>
            <div className="col">
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
            </div>
            <div className="col">
              <div className={cn(styles.galleryImage, styles.gridFull)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1590649917466-06e6e1c3e92d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG9mZmljZSUyMGV2ZW50fGVufDB8fDB8fHww"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
            </div>
            <div className="col">
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9mZmljZSUyMGV2ZW50fGVufDB8fDB8fHww"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9mZmljZSUyMGV2ZW50fGVufDB8fDB8fHww"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
            </div>
            <div className="col">
              <div className={cn(styles.galleryImage, styles.gridHalf)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1608755728617-aefab37d2edd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpZnR8ZW58MHx8MHx8fDA%3D"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
              <div className={cn(styles.smGrid, "row")}>
                <div className="col-sm-6">
                  <div className={cn(styles.galleryImage)}>
                    <ImageCustom
                      src="https://plus.unsplash.com/premium_photo-1682390303366-7463dcbec281?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGdyb3VwJTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D"
                      width={300}
                      height={300}
                      alt="gallery-img"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className={cn(styles.galleryImage)}>
                    <ImageCustom
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyb3VwJTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D"
                      width={300}
                      height={300}
                      alt="gallery-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1biUyMG9ubGluZXxlbnwwfHwwfHx8MA%3D%3D"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={cn(styles.galleryImages, "row")}>
            <div className="col">
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
            </div>
            <div className="col">
              <div className={cn(styles.galleryImage, styles.gridFull)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1590649917466-06e6e1c3e92d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG9mZmljZSUyMGV2ZW50fGVufDB8fDB8fHww"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
            </div>
            <div className="col">
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9mZmljZSUyMGV2ZW50fGVufDB8fDB8fHww"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9mZmljZSUyMGV2ZW50fGVufDB8fDB8fHww"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
            </div>
            <div className="col">
              <div className={cn(styles.galleryImage, styles.gridHalf)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1608755728617-aefab37d2edd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpZnR8ZW58MHx8MHx8fDA%3D"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
              <div className={cn(styles.smGrid, "row")}>
                <div className="col-sm-6">
                  <div className={cn(styles.galleryImage)}>
                    <ImageCustom
                      src="https://plus.unsplash.com/premium_photo-1682390303366-7463dcbec281?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGdyb3VwJTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D"
                      width={300}
                      height={300}
                      alt="gallery-img"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className={cn(styles.galleryImage)}>
                    <ImageCustom
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyb3VwJTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D"
                      width={300}
                      height={300}
                      alt="gallery-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1biUyMG9ubGluZXxlbnwwfHwwfHx8MA%3D%3D"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={cn(styles.galleryImages, "row")}>
            <div className="col">
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
            </div>
            <div className="col">
              <div className={cn(styles.galleryImage, styles.gridFull)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1590649917466-06e6e1c3e92d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG9mZmljZSUyMGV2ZW50fGVufDB8fDB8fHww"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
            </div>
            <div className="col">
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9mZmljZSUyMGV2ZW50fGVufDB8fDB8fHww"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9mZmljZSUyMGV2ZW50fGVufDB8fDB8fHww"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
            </div>
            <div className="col">
              <div className={cn(styles.galleryImage, styles.gridHalf)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1608755728617-aefab37d2edd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpZnR8ZW58MHx8MHx8fDA%3D"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
              <div className={cn(styles.smGrid, "row")}>
                <div className="col-sm-6">
                  <div className={cn(styles.galleryImage)}>
                    <ImageCustom
                      src="https://plus.unsplash.com/premium_photo-1682390303366-7463dcbec281?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGdyb3VwJTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D"
                      width={300}
                      height={300}
                      alt="gallery-img"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className={cn(styles.galleryImage)}>
                    <ImageCustom
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyb3VwJTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D"
                      width={300}
                      height={300}
                      alt="gallery-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
              <div className={cn(styles.galleryImage)}>
                <ImageCustom
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1biUyMG9ubGluZXxlbnwwfHwwfHx8MA%3D%3D"
                  width={300}
                  height={300}
                  alt="gallery-img"
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default GridMarqueeGallery;
