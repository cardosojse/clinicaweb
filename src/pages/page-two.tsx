import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

import { toast } from "sonner";

export function PageTwo() {
  const navigate = useNavigate();

  return (
    <div className="px-4 md:max-w-[80%] mx-auto">
      <header className="mt-6 mb-6">
        <div>
          <h1 className="mt-2 text-2xl">Agendamento</h1>
          <p className="text-slate-600">
            Preencha os dados para agendar a consulta
          </p>
        </div>
      </header>
      <div className="w-full pt-4 pb-10 flex flex-col items-start justify-between gap-4 md:flex-row">
        <div className="w-fit">
          <h2 className="text-lg font-normal">Dados do Paciente</h2>
          <p className="text-slate-600">
            Preencha as informações relacionadas à consulta
          </p>
        </div>
        <div className="w-full md:max-w-[400px] flex flex-col gap-4 sm:p-0 sm:pb-2">
          <label className="flex flex-col gap-2 text-sm dark:text-white">
            Nome
            <Input placeholder="Nome do paciente" />
            <span className="text-xs text-slate-600">
              Preencha com as informações do paciente
            </span>
          </label>
          <label className="flex flex-col gap-2 text-sm dark:text-white">
            Responsável
            <Input placeholder="Nome do responsável" />
            <span className="text-xs text-slate-600">
              Preencha com as informações do médico responsável
            </span>
          </label>
          <label className="flex flex-col gap-2 text-sm dark:text-white">
            Estudante
            <Input placeholder="Nome do estudante" />
            <span className="text-xs text-slate-600">
              Preencha com as informações do estudante
            </span>
          </label>
        </div>
      </div>
      <div className="w-full pt-4 pb-10 flex flex-col items-start justify-between gap-4 md:flex-row border-y">
        <div className="w-fit">
          <h2 className="text-lg font-normal">Informações adicionais</h2>
          <p className="text-slate-600">
            Preencha as informações relacionadas à consulta
          </p>
        </div>
        <div className="w-full md:max-w-[400px] flex flex-col gap-4 sm:p-0 sm:pb-2">
          <label className="flex flex-col gap-2 text-sm ">
            Data
            <Input type="date" />
            <span className="text-xs text-slate-600">
              Selecione a data da consulta
            </span>
          </label>
          <label className="text-sm flex flex-col gap-2">
            Tipo de tratamento
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o tipo de tratamento" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="est">Limpeza e profilaxia</SelectItem>
                  <SelectItem value="cst">Tratamento de cáries</SelectItem>
                  <SelectItem value="mst">Tratamentos periodontais</SelectItem>
                  <SelectItem value="pst">Cirurgias orais</SelectItem>
                  <SelectItem value="akst">Ortodontia</SelectItem>
                  <SelectItem value="hst">Consultas de rotina</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </label>
          <label className="flex flex-col gap-2 text-sm dark:text-white">
            Observações
            <Textarea placeholder="Digite algo aqui..." />
            <span className="text-xs text-slate-600">
              Preencha com as observações necessárias
            </span>
          </label>
        </div>
      </div>
      <div className="w-full flex justify-end py-4 gap-2">
        <Button className="bg-inherit border hover:bg-slate-50 text-black">
          Voltar
        </Button>
        <Button
          className="flex items-center gap-2 bg-blue-900 hover:bg-blue-900/90 text-white"
          onClick={() => toast("Dados salvos com sucesso!") && navigate("/")}
        >
          Salvar
        </Button>
      </div>
    </div>
  );
}
