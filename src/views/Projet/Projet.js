import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import MaterialTable from "material-table";
// @material-ui/icons
import Delete from "@material-ui/icons/Delete";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    columns: [
      { title: 'ID', field: 'nom' },
      { title: 'Projet', field: 'projet' },
      { title: 'Demandeur', field: 'demandeur'},
      {title: 'Client', field: 'client' },
      {title: 'Compétences', field: 'compétences' },
      {title: 'Statut', field: 'statut' },
      {title: 'Date de demande', field: 'dateDeDemande', type:'date' },
      {title: 'Début', field: 'début', type:'date' },
      {title: 'Fin', field: 'fin', type:'date' },
      {title: 'Commentaire', field: 'commentaire' },
      // {
      //   title: 'Birth Place',
      //   field: 'birthCity',
      //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      // },
    ],
    data: [
      // { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      // {
      //   name: 'Zerya Betül',
      //   surname: 'Baran',
      //   birthYear: 2017,
      //   birthCity: 34,
      // },
    ],
  });
  return (

    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />

 

    // <GridContainer>
    //   <GridItem xs={12} sm={12} md={12}>
    //     <Card>
    //       <CardHeader color="primary">
    //         <h4 className={classes.cardTitleWhite}>Simple Table</h4>
    //         <p className={classes.cardCategoryWhite}>
    //           Here is a subtitle for this table
    //         </p>
    //       </CardHeader>
    //       <CardBody>


    //         <Table
    //           tableHeaderColor="primary"
    //           tableHead={["ID", "Projet", "Demandeur", "Client", "Compétence", "Staut", "Date de demande", "Début", "Fin", "Commentaire", "Actions"]}
    //           tableData={[
    //             ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
    //             ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
    //             ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
    //             ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
    //             ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
    //             ["Mason Porter", "Chile", "Gloucester", "$78,615"]
    //           ]}
    //         />
    //       </CardBody>
    //     </Card>
    //   </GridItem>
      
    // </GridContainer>
  );
}
