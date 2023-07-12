// const updateMenuWithData = (response: any, id: any) => {
//     if (id === TypeTabGrafico.OBSTETRAS) {
//         const newData = {
//             labels: response.data.obstetras.map((item: { quantidade: number; date: string }) =>
//                 moment(item.date).format(selectedPeriod === '3' ? 'MM/YYYY' : 'DD/MM')
//             ),
//             values: response.data.obstetras.map((item: { quantidade: number; date: string }) => item.quantidade),
//         };
//         const updatedMenu: any = menu.map((item: any) => {
//             if (item.id === TypeTabGrafico.OBSTETRAS) {
//                 return { ...item, data: newData };
//             }
//             return item;
//         });
//         setMenu(updatedMenu);
//         // setMenu();
//     }
//     if (id === TypeTabGrafico.GESTANTES) {
//         const newData = {
//             labels: response.data.gestantes.map((item: { quantidade: number; date: string }) =>
//                 moment(item.date).format(selectedPeriod === '3' ? 'MM/YYYY' : 'DD/MM')
//             ),
//             values: response.data.gestantes.map((item: { quantidade: number; date: string }) => item.quantidade),
//         };
//         const updatedMenu: any = menu.map((item: any) => {
//             if (item.id === TypeTabGrafico.GESTANTES) {
//                 return { ...item, data: newData };
//             }
//             return item;
//         });
//         setMenu(updatedMenu);
//     }
//     if (id === TypeTabGrafico.MONITORAMENTOS) {
//         const newData = {
//             labels: response.data.monitoramentos.map((item: { quantidade: number; date: string }) =>
//                 moment(item.date).format(selectedPeriod === '3' ? 'MM/YYYY' : 'DD/MM')
//             ),
//             values: response.data.monitoramentos.map((item: { quantidade: number; date: string }) => item.quantidade),
//         };
//         const updatedMenu: any = menu.map((item: any) => {
//             if (item.id === TypeTabGrafico.MONITORAMENTOS) {
//                 return { ...item, data: newData };
//             }
//             return item;
//         });
//         setMenu(updatedMenu);
//     }
//     if (id === TypeTabGrafico.LEMBRETES) {
//         const newData = {
//             labels: response.data.lembretes.map((item: { quantidade: number; date: string }) =>
//                 moment(item.date).format(selectedPeriod === '3' ? 'MM/YYYY' : 'DD/MM')
//             ),
//             values: response.data.lembretes.map((item: { quantidade: number; date: string }) => item.quantidade),
//         };

//         const updatedMenu: any = menu.map((item: any) => {
//             if (item.id === TypeTabGrafico.LEMBRETES) {
//                 return { ...item, data: newData };
//             }
//             return item;
//         });
//         setMenu(updatedMenu);
//     }
// };
