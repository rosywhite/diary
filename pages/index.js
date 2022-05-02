import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            hey, i'm rosy
          </h1>
          <p>
            welcome to my diary 
          </p>

          <p>:)</p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/garden.jpg"
          alt="the garden"
          width={1920 / 2}
          height={1280 / 2}
        />'  
        <Image
          src="/ape-manual-meta-flowchart.JPG"
          alt="please read the post entitled: more mental models "
          width={640}
          height={960}
        />
        <Image
          src="/consciousness-observer-and-metabolism-mental-models.JPG"
          alt="please read the post entitled: more mental models"
          width={640}
          height={960}
        />
        <Image
          src="/enlightenment-venn-diagram.jpg"
          alt="please read the post entitled: three info diagram pics added to home page"
          width={640}
          height={960}
        />'  
        <Image
          src="/six-pillars-description.jpg"
          alt="please read the post entitled: three info diagram pics added to home page"
          width={640}
          height={960}
        />
        <Image
          src="/the-elements.jpg"
          alt="please read the post entitled: three info diagram pics added to home page"
          width={640}
          height={960}
        />
        <Image
          src="/inputs-and-runtimes.JPG"
          alt="two runtimes modeled are consciousness and the metabolism"
          width={640}
          height={960}
        />
      </div>
    </>
  )
}

export default HomePage
