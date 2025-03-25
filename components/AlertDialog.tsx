import { alertDialog } from '@/app/lib/interface';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from './ui/button';

export default async function AlertDialogInstance({ ...alert }: alertDialog) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className='dark:text-background'>
        <Button variant='outline'>{alert.buttonText || 'Open'}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='dark:text-foreground'>
            {alert?.name || 'Are you absolutely sure?'}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {alert?.dialogDescription ||
              'This action cannot be undone. This will permanently delete your account and remove your data from our servers.'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='dark:text-foreground'>
            {alert?.closeText || 'Cancel'}
          </AlertDialogCancel>
          <AlertDialogAction className='text-background'>
            {alert?.ctaText || 'Learn More'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
