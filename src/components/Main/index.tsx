import Banner from "../../assets/img/mobile/Grupo_309.jpg";
import BannerDesktop from "../../assets/img/desktop/Grupo_de_máscara_14.png";
import { ImageChoice } from "../ImageChoice";
import {
  HospitalsHighlights,
  ImgSection,
  KnowMore,
  PlansBenefis,
} from "./styles";
import { Button2, Button3, ButtonSubmit } from "../Buttons";
import TitleCard from "./titleCard";
import { Cards1, Cards2, Cards3 } from "../Cards";
import { useEffect, useState } from "react";
import { ContentsDivCard1 } from "../Cards/contentsCard";
import { useData } from "../../hooks/userData";
import ImageCard1 from "../../assets/img/mobile/02_Recepcao_principal-860x560@2x.png";
import ImageCard2 from "../../assets/img/mobile/human-hand-inserting-coin-piggybank@2x.png";
import PhoneCall from "../../assets/img/mobile/phone-call.svg";
import ModalContainer1 from "./Modal";
import ContentsMenu from "../CallWithUs";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import { useDataCard } from "../../hooks/userDataCard";

type Inputs = {
  name: string;
  phone: string;
  email: string;
  recaptcha: boolean;
};

const Main: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [openModal, setOpenModal] = useState(false);

  const { data } = useData();
  const { dataCard } = useDataCard();

  const schema = yup
    .object({
      name: yup.string().required(),
      phone: yup.string().required(),
      email: yup.string().required(),
      recaptcha: yup.boolean().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset();
  };

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  useEffect(() => {
    register("recaptcha", { required: true });
  });

  const userClickHandle = () => {
    setOpenModal(!openModal);
  };

  const handleRecaptcha = () => {
    setValue("recaptcha", true);
  };

  const active = width > 1024 && dataCard !== null;

  return (
    <main>
      <ImgSection>
        <ImageChoice
          src={Banner}
          srcSetDesktop={BannerDesktop}
          srcSetMobile={Banner}
        />
        <div className="ImgContents">
          <h1>
            Conforto e qualidade para levar bem-estar com alto padrão de
            atendimento a seus funcionários.
          </h1>
          <hr />
          <span className="planGoldHeader">
            Conheça o plano Ouro da Porto Seguro Saúde.
          </span>
          <div className="valueSection">
            <div className="ContentValue">
              <span>A partir de</span>
              <span className="currency">R$</span>
              <span className="value">255</span>
              <span className="currency">,65*</span>
            </div>
            <Button2 color="#F7B53D">Ver Mais</Button2>
          </div>
          <span className="valueRefer">
            *Valor referente ao plano Ouro Copar Q (ANS: 481.277/18-8) de 3 à 9
            vidas, com 20% de copart. com faixa etária entre 0 e 18 anos. Sem
            IOF. Promoção válida até 30 de abril de 2021.
          </span>
        </div>
      </ImgSection>

      <HospitalsHighlights id="hospitais">
        <TitleCard>Hospitais em destaque</TitleCard>
        <p>
          Contando com os melhores hospitais do Rio de Janeiro, o plano Ouro
          dispõe para sua empresa as redes mais referenciadas com diversos
          benefícios para que você tenha um atendimento totalmente
          personalizado.
        </p>
        <div className="cardsContainer">
          {data?.map(
            (element, index) =>
              index < 3 && <Cards1 values={element} key={element.id} />
          )}
        </div>
        {active && <ContentsDivCard1 active={active} />}
      </HospitalsHighlights>

      <PlansBenefis id="beneficios">
        <TitleCard>Benefícios do Plano</TitleCard>
        <div className="cardsContainer">
          <Cards2>
            <img src={ImageCard1}></img>
            <div className="cardContainer">
              <h3>Rede Referenciada</h3>
              <p>
                Com o plano Ouro da Porto Seguro Saúde, você conta com uma{" "}
                <span className="bold">rede referenciada</span> de hospitais com
                toda a comodidade que você e seus funcionários precisam.
              </p>
              <Button3 onClick={userClickHandle} color="#9A6D0C">
                <>Veja a lista completa de hospitais</>
              </Button3>
            </div>
          </Cards2>
          <Cards3>
            <img src={ImageCard2}></img>
            <div className="cardContainer">
              <h3>Reembolso de consultas e exames simples</h3>
              <p>
                Com o plano Ouro, receba o{" "}
                <span className="bold">
                  reembolso de seus exames e consultas
                </span>{" "}
                em até 48 horas úteis, a partir da data de entrega de todos os
                documentos necessários.
              </p>
              <p style={{ alignSelf: "flex-start", marginBottom: "0" }}>
                Plano Ouro Max: <span className="bold">R$280,00</span>
              </p>
            </div>
          </Cards3>
        </div>
      </PlansBenefis>
      <ModalContainer1 open={openModal} setClose={userClickHandle}>
        <h2>Hospitais de referência</h2>
        <ul>
          <li className="provincy">
            <span className="bold">Rio de Janeiro</span>
            <ul>
              <li>-Copa D’or</li>
              <li>-Quinta D’or</li>
              <li>-Barra D’or</li>
              <li>-Casa de Saúde São Jose (Humaitá)</li>
              <li>-Clínica São Vicente da Gávea</li>
              <li>-Hospital Vitória (Barra)</li>
              <li>-Perinatal Laranjeiras</li>
              <li>-Perinatal Barra</li>
            </ul>
          </li>
          <li className="provincy">
            <span className="bold">São Paulo</span>
            <ul>
              <li>-Hospital Alemão Oswaldo Cruz</li>
              <li>-Hospital 9 de Julho</li>
              <li>
                -Hospital São Luiz – Anália Franco / Itaim /Morumbi / S.C. Sul
              </li>
            </ul>
          </li>
        </ul>
      </ModalContainer1>

      <KnowMore id="contato">
        <TitleCard>Quer Saber mais?</TitleCard>
        <div className="KnowMoreContent1">
          <img src={PhoneCall} alt="Telefone Ligando" />
          <p>
            Ainda sobrou alguma dúvida sobre qual o melhor Plano para sua
            empresa? Envie seus dados e deixe que a NS Benefícios entrará em
            contato assim que possível.
          </p>
        </div>
        <div className="KnowMoreContent2">
          <div className="FormDiv">
            <form method="POST" onSubmit={handleSubmit(onSubmit)}>
              <label>
                Nome:
                <input
                  type="text"
                  {...register("name")}
                  name="name"
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <p style={{ color: "red" }}>Esse Campo é obrigatório</p>
                )}
              </label>
              <label>
                Telefone:
                <input
                  {...register("phone")}
                  type="phone"
                  name="phone"
                  placeholder="(COD) 99999-9999"
                />
                {errors.phone && (
                  <p style={{ color: "red" }}>Esse Campo é obrigatório</p>
                )}
              </label>
              <label>
                E-mail:
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  placeholder="seuemail@email.com"
                />
                {errors.email && (
                  <p style={{ color: "red" }}>Esse Campo é obrigatório</p>
                )}
              </label>
              <div className="recaptcha">
                <ReCAPTCHA
                  sitekey="6LdiqfgeAAAAAAgeuSTWGGsGrqDtw3vKILA3jLpr"
                  onChange={handleRecaptcha}
                />
                {errors.recaptcha && (
                  <p style={{ color: "red" }}>Esse Campo é obrigatório</p>
                )}
              </div>
              <ButtonSubmit color="#F7B53D">Enviar Contato</ButtonSubmit>
            </form>
          </div>
          <ContentsMenu />
        </div>
      </KnowMore>
    </main>
  );
};

export default Main;
