import Layout from '../components/layout.js';
export default function Home() {
  return (
    <Layout>
    <div class="bg-green-700">
    <div class="container px-6 py-24 mx-auto font-sans">
      <section class="text-white text-left">
        <div class="flex justify-left">
          <div class="max-w-[800px]">
            <h2 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-2">
              Welcome to the Southeastern Islands.
            </h2>
            <h5 class="text-white text-2xl">
              The Southeastern Islands are a prosperous nation made up of island-based cantons.
            </h5>
          </div>
        </div>
      </section>      
    </div>
    </div>
    <section class="m-12 font-sans">
      <div class="mb-5">
        <h3 class="text-3xl font-bold">A presidential notice...</h3>
        <p>This section highlights news from the presidential office, speaking across for the entirety of the SEI.</p>
        </div>
        <div class="p-8 bg-slate-950 rounded-lg mb-4">
          <i class="fa fa-quote-left absolute z-m10 text-slate-800 text-7xl"></i>
        <div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula diam, sodales vel nisi at, porta commodo mi. Fusce at interdum sapien. Fusce ac magna ultrices, feugiat tellus in, elementum arcu. In aliquet ante id gravida finibus. Aenean lacus risus, fringilla eu iaculis eu, egestas id nisi. Nullam faucibus commodo sem, sed condimentum quam congue id. Phasellus augue libero, posuere eu nulla vitae, dignissim dapibus risus. Donec est magna, luctus ut augue non, aliquam venenatis ligula. Sed pharetra faucibus augue. Aliquam erat volutpat. Pellentesque in est tortor.
  </p><br></br><p>
  Duis in sapien a eros malesuada sollicitudin. Sed ac orci luctus, tristique lorem eu, maximus sem. Quisque tincidunt pulvinar enim, sed ultricies massa tincidunt ut. Nullam quis leo risus. Nullam sed mi eu velit placerat cursus. Donec eget cursus justo. Nullam bibendum, mi ut ullamcorper ultrices, purus dui porttitor lectus, a mattis nisl diam ut tellus. Ut dui quam, scelerisque id laoreet ut, iaculis at risus.
  </p><br></br><p>
  Quisque condimentum tincidunt viverra. Quisque eget tincidunt massa. Morbi accumsan augue et diam dignissim blandit. Morbi tincidunt dolor est, id varius velit pharetra et. Cras varius risus volutpat neque pulvinar, sed facilisis mi congue. Suspendisse posuere faucibus suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eget volutpat odio. Etiam rhoncus turpis nec ex consectetur, a elementum massa feugiat. Pellentesque tincidunt hendrerit commodo. Ut imperdiet blandit augue, et posuere risus dapibus vitae. Maecenas malesuada in mi eu sagittis. 
          </p>
        </div>
        </div>
        <span class="font-bold text-2xl text-white">Andrew Lee</span>
        <p class="text-slate-400">President of the Southeastern Islands</p>
      </section>
      <section class="m-12">
        <div class="mb-6">
          <h1 class="text-3xl font-bold">Learn more about the Southeastern Islands...</h1>
          <p>Use the cards below to discover more about local amenities, services and about the nation.</p>
        </div>
        <div class="px-2">
  <div class="flex -mx-2">
    <div class="w-1/3 px-2">
      <div class="h-12">
        <a href="/life" class="no-underline text-white ">
        <div class="transition duration-150 ease-out relative bg-slate-950 h-100 w-100 p-6 rounded-lg hover:bg-slate-900 hover:ease-in">
          <i class="fa-solid fa-person text-slate-800 text-6xl"></i>
          <h3 class="mt-3 text-2xl font-bold">Life in SEI</h3>
          <p>Learn more about life in SEI, learn about housing, amenities, local services and attractions that are based around the Southeastern Islands.</p>
          </div>
          </a>
      </div>
    </div>
    <div class="w-1/3 px-2">
      <div class="h-12">
      <a href="/cabinet" class="no-underline text-white ">
        <div class="transition duration-150 ease-out relative bg-slate-950 h-100 w-100 p-6 rounded-lg hover:bg-slate-900 hover:ease-in">
          <i class="fa-solid fa-door-open text-slate-800 text-6xl"></i>
          <h3 class="mt-3 text-2xl text-white font-bold">Governmental Cabinet</h3>
          <p>Learn more about the government, canton control and how we manage and create decisions within the Southeastern Islands and individual cantons.</p>
          </div>
          </a>
      </div>
    </div>
    <div class="w-1/3 px-2">
      <div class="h-12">
      <a href="/services" class="no-underline text-white ">
        <div class="transition duration-150 ease-out relative bg-slate-950 h-100 w-100 p-6 rounded-lg hover:bg-slate-900 hover:ease-in">
          <i class="fa-solid fa-handshake text-slate-800 text-6xl"></i>
          <h3 class="mt-3 text-2xl text-white font-bold">Amenities and Services</h3>
          <p>Learn more about amentities and services that are offered to citizens by the government cabinets. This includes telecommunications & travel services.</p>
          </div>
          </a>
      </div>
    </div>
  </div>
</div>
      </section>
    </Layout>
  )
}