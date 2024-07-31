import GitHubModuleSearch from "@/component/ModuleLocater";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-4">Search module you want in any public repo.</h1>
      <p className="text-2xl font-bold text-center">Note: Currently it is limited to repo containing `src` folder</p>
      <GitHubModuleSearch/>
    </div>
  );
}
