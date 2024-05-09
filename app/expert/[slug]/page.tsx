import { bioPage } from '@/app/lib/interface';
import { client, urlFor } from '@/app/lib/sanity';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';

// Icons
import { FaLinkedin } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { MdPhoneIphone } from 'react-icons/md';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';
import { TbWorldWww } from 'react-icons/tb';

export const revalidate = 30; // revalidate every 30 seconds

async function getData(slug: string) {
  const query = `
  *[_type == 'author' && slug.current == '${slug}'] {
    'currentSlug': slug.current,
      name,
      credentials,
      headshot,
      body,
      'currentCat': categories[0],
      email,
      linkedin,
      twitter,
      facebook,
      instagram,
      website,
      phone,
      location,
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function ExpertAuthor({
  params,
}: {
  params: { slug: string };
}) {
  const data: bioPage = await getData(params.slug);

  const socialIcon = 'inline-block h-[1.2rem] w-[1.2rem]';
  const socialLinks =
    'flex items-center text-primary font-bold text-base gap-2';

  return (
    <div>
      <h1>
        <span className='block text-base text-center text-primary font-semibold tracking-wide uppercase'>
          alliantgroup - Experts
        </span>
        <span className='block text-4xl text-center md:text-left font-bold tracking-tight leading-8 sm:text-5xl mt-8'>
          {data.name}
        </span>
      </h1>
      <div className='flex flex-col md:flex-row gap-6 md:gap-12 py-4 md:py-6'>
        <div className='w-full md:w-1/3'>
          <Image
            src={urlFor(data.headshot).url()}
            width={200}
            height={200}
            alt={data.headshot.alt}
            title={data.headshot.alt}
            priority
            className='rounded-lg mt-8 object-cover mx-auto'
          />
        </div>
        <div className='w-full md:w-2/3 gap-2'>
          <div>
            <span className='block text-2xl leading-8 text-center md:text-left'>
              {data.credentials}
            </span>
          </div>
          <Button className='w-full py-6 my-6 text-lg'>
            <Link href={`mailto:${data.email}`}>Email {data.name}</Link>
          </Button>
          <div className='mt-4 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary'>
            <PortableText value={data.body} />
          </div>
          {data.linkedin ||
          data.twitter ||
          data.facebook ||
          data.instagram ||
          data.website ? (
            <div className='flex flex-col gap-2 w-full py-6'>
              <h3 className='text-lg'>Social Presence:</h3>
              <div className='flex flex-flow flex-wrap justify-start gap-4'>
                {data.linkedin ? (
                  <div className='pr-6'>
                    <Link
                      className={socialLinks}
                      target='_blank'
                      href={data.linkedin}
                    >
                      <FaLinkedin className={socialIcon} />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>LinkedIn</TooltipTrigger>
                          <TooltipContent>
                            <p>Let&apos;s connect</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
                {data.twitter ? (
                  <div className='pr-6'>
                    <Link
                      className={socialLinks}
                      target='_blank'
                      href={data.twitter}
                    >
                      <FaSquareXTwitter className={socialIcon} />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>Twitter</TooltipTrigger>
                          <TooltipContent>
                            <p>Come @ me</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
                {data.facebook ? (
                  <div className='pr-6'>
                    <Link
                      className={socialLinks}
                      target='_blank'
                      href={data.facebook}
                    >
                      <IoLogoFacebook className={socialIcon} />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>Facebook</TooltipTrigger>
                          <TooltipContent>
                            <p>Can&apos;t we be friends</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
                {data.instagram ? (
                  <div className='pr-6'>
                    <Link
                      className={socialLinks}
                      target='_blank'
                      href={data.instagram}
                    >
                      <FaInstagram className={socialIcon} />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>Instagram</TooltipTrigger>
                          <TooltipContent>
                            <p>Let&apos;s connect</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
                {data.website ? (
                  <div className='pr-6'>
                    <Link
                      className={socialLinks}
                      target='_blank'
                      href={data.website}
                    >
                      <TbWorldWww className={socialIcon} />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>Website</TooltipTrigger>
                          <TooltipContent>
                            <p>Find us online</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
                {data.phone ? (
                  <div className='pr-6'>
                    <Link
                      className={socialLinks}
                      target='_blank'
                      href={`tel:${data.phone}`}
                    >
                      <MdPhoneIphone className={socialIcon} />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>Call {data.name}</TooltipTrigger>
                          <TooltipContent>
                            <p>Let&apos;s chat</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
                {data.location ? (
                  <div className='pr-6'>
                    <Link
                      className={socialLinks}
                      target='_blank'
                      href={data.location}
                    >
                      <FaMapLocationDot className={socialIcon} />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>Get Directions</TooltipTrigger>
                          <TooltipContent>
                            <p>Come visit</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
