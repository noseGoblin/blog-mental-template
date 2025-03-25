import { bioPage, alertDialog } from '@/app/lib/interface';
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
import AlertDialogInstance from '@/components/AlertDialog';

export const revalidate = 600; // revalidate every 30 seconds

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
      color,
      customButton->{
        color,
        text,
        link,
      },
      'buttonColor': customButton->color,
      'buttonLink': customButton->link,
      'buttonText': customButton->text,
      'alert': alertDialog[0]->{
        _id,
        name,
        buttonText,
        buttonColor,
        dialogTitle,
        dialogDescription,
        closeText,
        closeLink,
        ctaText,
        ctalink,
      },
  }[0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function ExpertAuthor(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const data: bioPage = await getData(params.slug);
  const alert: alertDialog = data.alert;

  const socialIcon = 'inline-block h-[1.2rem] w-[1.2rem]';
  const socialLinks =
    'flex items-center text-primary dark:text-socials font-bold text-base gap-2';

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
          <Button className='w-full py-6 my-6 text-lg text-white dark:text-white'>
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
              <div className='flex flex-flow flex-wrap justify-start gap-[2rem]'>
                {data.linkedin ? (
                  <div className='align-middle self-center'>
                    <Link
                      className={socialLinks}
                      target='_blank'
                      href={data.linkedin}
                    >
                      <FaLinkedin className={socialIcon} />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='cursor-pointer'>
                            LinkedIn
                          </TooltipTrigger>
                          <TooltipContent className='h-10'>
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
                  <div className='align-middle self-center'>
                    <Link
                      className={socialLinks}
                      target='_blank'
                      href={data.twitter}
                    >
                      <FaSquareXTwitter className={socialIcon} />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='cursor-pointer'>
                            Twitter
                          </TooltipTrigger>
                          <TooltipContent className='h-10'>
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
                  <div className='align-middle self-center'>
                    <Link
                      className={socialLinks}
                      target='_blank'
                      href={data.facebook}
                    >
                      <IoLogoFacebook className={socialIcon} />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='cursor-pointer'>
                            Facebook
                          </TooltipTrigger>
                          <TooltipContent className='h-10'>
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
                  <div className='align-middle self-center'>
                    <Link
                      className={socialLinks}
                      target='_blank'
                      href={data.instagram}
                    >
                      <FaInstagram className={socialIcon} />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='cursor-pointer'>
                            Instagram
                          </TooltipTrigger>
                          <TooltipContent className='h-10'>
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
                  <div className='align-middle self-center'>
                    <Link
                      className={socialLinks}
                      target='_blank'
                      href={data.website}
                    >
                      <TbWorldWww className={socialIcon} />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='cursor-pointer'>
                            Website
                          </TooltipTrigger>
                          <TooltipContent className='h-10'>
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
                  <div className='align-middle self-center'>
                    <Link
                      className={socialLinks}
                      target='_blank'
                      href={`tel:${data.phone}`}
                    >
                      <MdPhoneIphone className={socialIcon} />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='cursor-pointer'>
                            Call {data.name}
                          </TooltipTrigger>
                          <TooltipContent className='h-10'>
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
                  <div className='align-middle self-center cursor-pointer'>
                    <Link
                      className={socialLinks}
                      target='_blank'
                      href={data.location}
                    >
                      <FaMapLocationDot className={socialIcon} />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='cursor-pointer'>
                            Get Directions
                          </TooltipTrigger>
                          <TooltipContent className='h-10'>
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

          <div className='flex flex-col w-full items-center justify-between py-4'>
            {data.customButton &&
            data.buttonLink.startsWith(`^(http|https)://`) ? (
              <Button
                color={data.buttonColor}
                className='w-full py-6 my-6 text-lg'
              >
                <Link href={data.buttonLink} target='_blank'>
                  {data.buttonText}
                </Link>
              </Button>
            ) : data.customButton ? (
              <Button
                color={data.buttonColor}
                className='w-full py-6 my-6 text-lg'
              >
                <Link href={data.buttonLink}>{data.buttonText}</Link>
              </Button>
            ) : (
              ''
            )}
          </div>

          {data.alert ? (
            <div className='my-12'>
              <AlertDialogInstance {...alert} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
