import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getFineTunedModels } from '@/api/rest';
import { ReactFlowProvider } from 'reactflow';
import { MdOutlineAdd, MdOutlineChevronLeft } from 'react-icons/md';
import Button from '@/components/Button';
import SideNav from '@/components/SideNav';
import { QUERY_KEYS, ROUTES, SERVICE_NAME } from '@/constants';

const navigation = [
  { name: 'Training', path: ROUTES.TRAIN },
  { name: 'Test', path: ROUTES.TEST },
  { name: 'History', path: ROUTES.MAIN },
];

export default function Root() {
  const { pathname } = useLocation() as { pathname: string };
  const [showNav, setShowNav] = useState(true);
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const { data: models } = useQuery({
    queryKey: [QUERY_KEYS.FINE_TUNED_MODELS],
    queryFn: getFineTunedModels,
  });

  return (
    <section className="flex flex-col h-screen">
      <header className="relative flex justify-around gap-10 md:block p-6 border-b-2 border-b-line">
        <div className="md:w-80 h-full flex justify-center items-center md:absolute md:top-0 md:left-0">
          <h3 className="text-2xl md:text-3xl">{SERVICE_NAME}</h3>
        </div>
        <nav>
          <ul className="flex justify-center gap-8">
            {navigation.map((menu) => {
              const isActive = pathname === menu.path;
              return (
                <li
                  key={menu.name}
                  className={`w-24 h-12 p-3 text-center font-bold ${
                    isActive ? 'border-b-2 border-primary' : 'text-disabled'
                  }`}
                >
                  <Link to={menu.path}>{menu.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <section className="flex flex-1 w-screen">
        {showNav ? (
          <SideNav side="left">
            <div className="flex gap-1.5">
              <Button
                listStyle
                className="flex-1 text-left"
                onClick={() => navigate(ROUTES.TRAIN)}
              >
                <MdOutlineAdd className="inline-block mr-2" />
                <span>New Model</span>
              </Button>
              <Button listStyle onClick={() => setShowNav(false)}>
                <MdOutlineChevronLeft />
              </Button>
            </div>
            <ul className="mt-1.5">
              {models?.map((model) => (
                <li
                  key={model.fm_no}
                  onClick={() => setSelected(model.fm_no)}
                  className={`-mx-1.5 px-4 py-3 cursor-pointer hover:bg-slate-200 ${
                    model.fm_no === selected && 'font-bold bg-slate-200'
                  }`}
                >
                  {model.fm_name}
                </li>
              ))}
            </ul>
          </SideNav>
        ) : (
          <Button
            listStyle
            onClick={() => setShowNav(true)}
            className="absolute m-1.5"
          >
            <MdOutlineChevronLeft />
          </Button>
        )}
        <ReactFlowProvider>
          <Outlet />
        </ReactFlowProvider>
      </section>
    </section>
  );
}
