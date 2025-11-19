import Image from "next/image";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex max-h-2/3 w-full max-w-3xl rounded-sm flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div className={'flex flex-col items-center w-full gap-4'}>
              <div className={'flex flex-col items-center'}>
                  <div className={'font-bold'}>Espace de connexion de la plateforme INTIA Assurance</div>
                  <div>Entrez vos informations de connexion pour acceder à la plateforme</div>
              </div>
              <div className={'flex flex-col w-full gap-3'}>
                <Input placeholder={'Entrez votre email...'} className={'w-full h-10 pl-4'}/>
                <Input placeholder={'Entrez votre mot de passe...'} className={'w-full h-10 pl-4'}/>
              </div>
              <Button className={'w-full'}>
                  <Link href={'home'}>Se connecter</Link>
              </Button>
          </div>
      </main>
    </div>
  );
}
