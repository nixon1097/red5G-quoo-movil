const CardButtons = ({
  colorText,
  bgfrom,
  bgto,
  title,
  setModalVisible,
  onClick,
  setOpenModalForm,
}) => {
  const handelClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
    setModalVisible(false);
  };
  console.log(colorText);
  return (
    <div className=" shadow-[-8px_-8px__16px_rgb(rgba(0,122,248,0.16))] shadow-[#4676C31C] rounded-[32px]  drop-shadow-[-8px_-8px__16px_rgb(rgba(0,122,248,0.16))]">
      <button
        className={`w-full h-12 rounded-[32px] drop-shadow-[-8px_-8px__16px_rgb(rgba(0,122,248,0.16))] bg-gradient-to-b from-${bgfrom} to-${bgto}  text-[16px]  text-${colorText}  shadow-xl shadow-[#4676C31C]  `}
        onClick={handelClick}
      >
        {title}
      </button>
    </div>
  );
};
export default CardButtons;
