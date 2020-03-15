const Hint = ({ title, value, color }) => {
  return (
    <div className='chart_con'>
      <div className='chart__hint'></div>
      <div className='chart__hint--wrap'>
        <h4 className='chart__hint--title'>{title}</h4>
        <span className='chart__hint--value'>{value}</span>
      </div>

      <style jsx>{`
        .chart__hint {
          background-color: ${color};
        }
      `}</style>
    </div>
  );
};

export default Hint;
