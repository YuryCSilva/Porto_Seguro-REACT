interface ImageChoiceProps{
    srcSetMobile: string;
    srcSetDesktop: string;
    src: string;
  }
  
  export function ImageChoice(props: ImageChoiceProps) {
    return (
      <picture>
        <source media="(max-width: 1023px)" srcSet={props.srcSetMobile} />
        <source media="(min-width: 1024px)" srcSet={props.srcSetDesktop} />
        <img src={props.src} alt="Logo Norte a Sul" />
      </picture>
    );
  }