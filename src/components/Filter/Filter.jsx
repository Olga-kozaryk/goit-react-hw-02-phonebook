export const Filter = ({value, onChange}) => {
    return (<div >
      <label >
        Filter
        <input
          type="name"
          value={value}
          onChange={onChange}
         
        />
      </label>
    </div>
  );
}