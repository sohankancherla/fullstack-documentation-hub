import { Navigation } from "./Navigation";


export function Layout({ navigation, children }) {
  
    return (
      <div className="flex w-full flex-col">
        <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
          <div className="hidden lg:relative lg:block lg:flex-none">
            <div className="absolute inset-y-0 right-0 w-[50vw]" />
            <div className="absolute bottom-0 right-0 top-16 h-12 w-px bg-gradient-to-t from-slate-100 dark:from-slate-800 block" />
            <div className="absolute bottom-0 right-0 top-28 w-px bg-slate-100 dark:bg-slate-800 block" />
            <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
              <Navigation navigation={navigation} />
            </div>
          </div>
          {children}
        </div>
      </div>
    )
}