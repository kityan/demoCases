interface Props {
  theme: any,
  classes: any,
  count: number
  onChangePage: (event: React.SyntheticEvent<HTMLButtonElement>, n: number) => void,
  page: number
  rowsPerPage: number
}

export default Props
