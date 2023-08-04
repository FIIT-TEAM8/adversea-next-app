import { redirect } from 'next/navigation'
import * as amplitude from '@amplitude/analytics-browser';

export default function Home() {
  amplitude.init(`${process.env.AMPLITUDE_API_KEY}`);
  redirect("/search");
}
