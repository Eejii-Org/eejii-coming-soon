"use client";
import { Facebook, Instagram, Mail } from "@/icons";
import Image from "next/image";
import { useState } from "react";
import { registerCustomer } from "@/actions";

export default function Home() {
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const submit = (form: FormData) => {
    const mail = form.get("mail") as string;
    if (!mail) {
      setSuccess("error");
      return;
    }
    setLoading(true);
    try {
      registerCustomer(mail);
      setSuccess("success");
      setLoading(false);
    } catch (e) {
      console.error(e);
      setSuccess("error");
      setLoading(false);
    }
  };
  return (
    <div className="w-screen min-h-screen flex">
      <Image
        src="/bg.webp"
        fill
        alt="background-image"
        className="object-cover"
      />
      <div className="mx-auto container px-4 relative my-16 flex flex-col justify-between flex-1">
        <div className="flex flex-row justify-between">
          <h3 className="raleway text-lg md:text-2xl">
            Let’s Create An Earth
            <br />
            <span className="md:pl-16">Full Of Love Together</span>
          </h3>
          <div className="relative w-24 h-24 md:w-[147px] md:h-[147px] z-10">
            <Image
              src="/eejii-logo.webp"
              fill
              alt="eejii-logo"
              quality={1}
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 text-sm md:text-base">
            <h1 className="font-medium">
              Монгол дахь хүмүүнлэгийн үйл ажиллагаа болон сайн дурынхныг дэмжих
            </h1>
            <h1 className="font-bold">ALL IN ONE SYSTEM</h1>
          </div>
          <h2 className="raleway text-2xl sm:text-3xl lg:text-[80px] lg:leading-normal tracking-normal py-3 lg:py-0">
            ТУН УДАХГҮЙ
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 pt-2 pb-32">
            <form
              className="flex flex-col items-end md:items-stretch md:flex-row gap-4"
              action={submit}
            >
              <input
                name="mail"
                className="bg-white border border-white rounded-lg py-[14px] px-4 w-[calc(100vw-32px)] md:w-[364px] text-black"
                placeholder="Email"
                type="email"
              />
              <button
                disabled={loading}
                type="submit"
                className="bg-[#3C888D] text-white font-semibold text-base px-6 rounded-lg border-2 border-white/50 py-3 md:py-0"
              >
                {loading ? "Loading..." : "Бидэнтэй Нэгдэх"}
              </button>
            </form>
            {success &&
              (success == "success" ? (
                <p className="text-[#BFE88C]">Амжилттай бүртгэлээ</p>
              ) : (
                <p className="text-[#FF0000]">Алдаа заалаа</p>
              ))}
            <p className="font-medium text-sm md:text-base">
              ХАЙР ДҮҮРЭН ЕРТӨНЦИЙГ ХАМТДАА БҮТЭЭЕ
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="p-2 rounded-full bg-white cursor-pointer">
            <Facebook />
          </div>
          <div className="p-2 rounded-full bg-white cursor-pointer">
            <Instagram />
          </div>
          <div className="p-2 rounded-full bg-white cursor-pointer">
            <Mail />
          </div>
        </div>
      </div>
    </div>
  );
}
