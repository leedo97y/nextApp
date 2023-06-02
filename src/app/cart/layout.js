export default function CartLayout({ children }) {
  return (
    <div className="eventAd">
      <p className="cardEventAd">현대카드 무이자이벤트중</p>
      {children}
    </div>
  );
}
