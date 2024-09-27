'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Separator } from "@/components/ui/Separator"
import Faq from '@/components/Faq'
import Carousel from '@/components/Carousel/Carousel'
import CoreServiceCard from '@/components/CoreServiceCard'
import { getCoreServiceSectionsData } from '@/lib/api'; // 引入获取 API 数据的函数
import { useEffect, useState } from 'react';

// 动态导入 motion.div
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
export default function Component({ params: { locale } }) {
  const [coreServices, setCoreServices] = useState([]);

  // 使用 useEffect 获取数据
  useEffect(() => {
    async function fetchData() {
      const services = await getCoreServiceSectionsData(locale); // 传递 locale 参数
      setCoreServices(services); // 设置获取到的服务数据
    }
    fetchData();
  }, [locale]); // 添加 locale 依赖
  return (
    <div className="container mx-auto px-4 ">
      <h1 className="text-5xl font-bold text-primary mb-4 text-center p-6">About Us</h1>
      <div className="flex w-full justify-center">
        <Separator className="my-10 h-1px] w-[95%] bg-primary justify-center " />
      </div>
      {/* Tabs and Tab List */}
      <Tabs defaultValue="sampola">
        <TabsList className="flex w-full justify-between bg-transparent flex-wrap">
          <TabsTrigger
            value="sampola"
            className="font-bold md:data-[state=active]:border-b-4 md:hover:border-b-4 hover:border-primary-dark flex-grow data-[state=active]:border-primary-dark hover:text-primary-dark data-[state=active]:text-primary-dark"
          >
            Our Mission
          </TabsTrigger>
          <Separator className="bg-[#becfc1]" orientation="vertical" />
          <TabsTrigger value="services" className="font-bold md:data-[state=active]:border-b-4 md:hover:border-b-4 hover:border-primary-dark flex-grow data-[state=active]:border-primary-dark hover:text-primary-dark data-[state=active]:text-primary-dark">
            Core Services
          </TabsTrigger>
          <Separator className="bg-[#becfc1]" orientation="vertical" />
          <TabsTrigger value="partners" className="font-bold md:data-[state=active]:border-b-4 md:hover:border-b-4 hover:border-primary-dark flex-grow data-[state=active]:border-primary-dark hover:text-primary-dark data-[state=active]:text-primary-dark">
            Partners
          </TabsTrigger>
          <Separator className="bg-[#becfc1]" orientation="vertical" />
          <TabsTrigger value="impact" className="font-bold md:data-[state=active]:border-b-4 md:hover:border-b-4 hover:border-primary-dark flex-grow data-[state=active]:border-primary-dark hover:text-primary-dark data-[state=active]:text-primary-dark">
            Social Impact
          </TabsTrigger>
          <Separator className="bg-[#becfc1]" orientation="vertical" />
          <TabsTrigger value="about" className="font-bold md:data-[state=active]:border-b-4 md:hover:border-b-4 hover:border-primary-dark flex-grow data-[state=active]:border-primary-dark hover:text-primary-dark data-[state=active]:text-primary-dark">
            Our Story
          </TabsTrigger>
        </TabsList>

        {/* Mission and Vision Section with Transition */}
        <TabsContent value="sampola" className="   p-6">

          <div className="mb-8  ">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }} // 初始状态
              animate={{ opacity: 1, x: 0 }}    // 动画状态
              exit={{ opacity: 0, x: 20 }}       // 退出状态
              transition={{ duration: 0.4 }}     // 过渡时间
            >
              <Image
                src="/images/about_banner (1).webp" // Placeholder image
                alt="Work and community support"
                width={1500}
                height={300}
                className="mb-4 rounded-lg"
              />
              
              <h2 className="text-3xl font-bold mb-4 text-primary">Supporting Communities, Empowering Work</h2>
              <p className="text-lg mb-4">
                Sampola is a non-profit organization committed to providing job opportunities and social support to people with special needs.
                Our vision is to create an inclusive society where everyone can improve their quality of life through meaningful work and gain social recognition and respect.
              </p>
              <p className="text-lg mb-4">
                Our mission is to create employment opportunities, provide training, and promote environmental projects to help people with disabilities and marginalized groups
                integrate into society and enhance their self-confidence. We collaborate with businesses and the government to advance social responsibility initiatives and foster sustainability.
              </p>
            </MotionDiv>
          </div>

        </TabsContent>

        {/* Core Services Section with Transition */}
        <TabsContent value="services" className="mb-16   p-6">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/sampola_banner3.webp" // Placeholder image
              alt="Work and community support"
              width={1500}
              height={300}
              className="mb-4 rounded-lg"
            />
            <h2 className="text-3xl font-bold mb-4 text-primary">Empowering Communities through Work</h2>
            <p className="text-lg mb-4">
              At Sampola, we provide three primary services to support communities and individuals with special needs:
            </p>
            <p className="text-lg mb-4">
              <strong>Work and Community Support:</strong> We offer personalized job placement services, ensuring individuals with disabilities can find meaningful work suited to their abilities, improving their quality of life.
            </p>
            <p className="text-lg mb-4">
              <strong>Recycling and Sustainability:</strong> Our recycling initiatives transform discarded materials into eco-friendly products, creating jobs and reducing environmental waste.
            </p>
            <p className="text-lg mb-4">
              <strong>Business Outsourcing Services:</strong> We partner with businesses to provide cost-effective outsourcing services such as packaging, assembly, and more, helping companies fulfill their social responsibility commitments.
            </p>
          </MotionDiv>
        </TabsContent>

        {/* Partners Section with Transition */}
        <TabsContent value="partners" className="mb-16   p-6">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            {/* <Image
              src="/images/image20.png" // Placeholder image
              alt="Work and community support"
              width={1500}
              height={300}
              className="mb-4 rounded-lg"
            /> */}
            <Carousel></Carousel>
            <h2 className="text-3xl font-bold mb-4 text-primary">Building a Better Future Together</h2>
            <p className="text-lg mb-4">
              Sampola works with a wide range of local and international partners who share our commitment to social responsibility and sustainability.
              Together, we create meaningful work opportunities, foster social integration, and promote environmentally friendly practices.
            </p>
            <p className="text-lg mb-4">
              Our partners come from various industries, helping us expand our impact by offering resources, collaborations, and support for our mission.
              With their contributions, we are able to provide job opportunities for individuals in need while making a positive environmental impact.
            </p>
          </MotionDiv>
        </TabsContent>

        {/* Social Impact Section with Transition */}
        <TabsContent value="impact" className="mb-16   p-6">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/image4.png" // Placeholder image
              alt="Work and community support"
              width={1500}
              height={300}
              className="mb-4 rounded-lg max-h-[482px] object-cover"
            />
            <h2 className="text-3xl font-bold mb-4 text-primary">Making a Difference, One Life at a Time</h2>
            <p className="text-lg mb-4">
              At Sampola, we believe in the transformative power of work. Through our programs, we have helped hundreds of individuals with disabilities gain employment,
              find a sense of purpose, and build confidence. Our recycling and sustainability projects further extend our impact by promoting environmental responsibility.
            </p>
            <p className="text-lg mb-4">
              Our social impact can be seen in the lives we have changed and the communities we have supported. Every job opportunity we create and every product we recycle
              brings us closer to a more inclusive and sustainable society.
            </p>
          </MotionDiv>
        </TabsContent>

        {/* About Us Section with Transition */}
        <TabsContent value="about" className="mb-16   p-6">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/sampola_banner4.webp" // Placeholder image
              alt="Work and community support"
              width={1500}
              height={300}
              className="mb-4 rounded-lg"
            />
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Story and Vision</h2>
            <p className="text-lg mb-4">
              Sampola was founded in the 1960s with the goal of creating meaningful employment opportunities for individuals with disabilities and those in need of special support.
              Over the decades, we have grown into a comprehensive organization that not only provides job opportunities but also promotes sustainability through various recycling initiatives.
            </p>
            <p className="text-lg mb-4">
              Our vision is to create a world where work is accessible to everyone, and communities are built on the principles of inclusion and sustainability.
              We strive to integrate individuals into the workforce, helping them lead fulfilling lives while contributing to a healthier planet.
            </p>
          </MotionDiv>
        </TabsContent>
      </Tabs>

      {/* <Separator className="my-10 h-1px] bg-primary justify-center w-full" /> */}
      <div className="flex w-full justify-center">
        <Separator className="my-10 h-1px] w-[95%] bg-primary justify-center " />
      </div>

      <section className="mb-16">
        {coreServices.map((service, index) => (
          <div key={index}>
            <CoreServiceCard
              imgLeft={index % 2 === 0} // 根据索引值判断图片位置
              title={service.attributes.title} // 获取 title
              description={service.attributes.description} // 获取 description
              // 拼接完整的图片 URL
              imageSrc={`${process.env.NEXT_PUBLIC_API_URL}${service.attributes.image?.data?.attributes?.url || '/default-image.jpg'}`}
              imageAlt={service.attributes.title} // 使用 title 作为 alt 文本
            />
            <div className="flex w-full justify-center">
              <Separator className="my-10 h-1px] w-[95%] bg-primary justify-center " />
            </div>
          </div>
        ))}
      </section>
      {/* FAQ Section */}
      <Faq></Faq>
      <div className="flex w-full justify-center">
        <Separator className="my-10 h-1px] w-[95%] bg-primary justify-center " />
      </div>
      {/* Success Stories Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-primary-dark">Sampola's Success Stories</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg overflow-hidden">
            <Image
              src="/images/image18.webp" // Placeholder image
              alt="Success story 3"
              width={400}
              height={250}
              className="w-full  md:h-72 h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-primary-dark">Work Support in the Community</h3>
              <p className="mb-4">With Sampola's help, many individuals with disabilities have found meaningful work, boosting their confidence and improving their lives.</p>
              <Link href="#" className="text-primary hover:underline">Read More</Link>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg overflow-hidden">
            <Image
              src="/images/image35.jpeg" // Placeholder image
              alt="Success story 2"
              width={400}
              height={250}
              className="w-full  md:h-72 h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-primary-dark">Success in Recycling Projects</h3>
              <p className="mb-4">Sampola's recycling projects have transformed old advertising materials into eco-friendly products, earning praise from businesses and the community.</p>
              <Link href="#" className="text-primary hover:underline">Read More</Link>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg overflow-hidden">
            <Image
              src="/images/image17.png" // Placeholder image
              alt="Success story 3"
              width={400}
              height={250}
              className="w-full  md:h-72 h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-primary-dark">Outsourcing Services for Businesses</h3>
              <p className="mb-4">Through partnerships with local businesses, Sampola provides high-quality outsourcing services that help companies save costs while meeting their social responsibility commitments.</p>
              <Link href="#" className="text-primary hover:underline">Read More</Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
