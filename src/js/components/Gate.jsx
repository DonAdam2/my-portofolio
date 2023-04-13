const Gate = ({ children, isAnimateGate }) => (
  <div className="gate">
    <div className={`left-gate ${isAnimateGate ? 'open-gate' : ''}`} />
    <div className={`right-gate ${isAnimateGate ? 'open-gate' : ''}`} />
    {children}
  </div>
);

export default Gate;
