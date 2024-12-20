// src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Meta tags */}
                    <meta charset="utf-8" />  {/* Définit le jeu de caractères */}
                    <meta name="viewport" content="width=device-width, initial-scale=1" />  {/* Pour une meilleure expérience mobile */}

                    {/* Lier les fichiers CSS statiques depuis le dossier public */}
                    <link rel="stylesheet" href="/assets/css/plugin-css/swiper-bundle.css" />
                    <link rel="stylesheet" href="/assets/css/plugin-css/aos.css" />
                    <link rel="stylesheet" href="/assets/css/plugin-css/perfect-scrollbar.css" />
                    <link rel="stylesheet" href="/assets/css/plugin-css/simple-datatables.css" />
                    <link rel="stylesheet" href="/assets/css/plugin-css/preloader.css" />
                    <link rel="stylesheet" href="/assets/css/main.css" />
                    <link rel="stylesheet" href="/assets/css/custom.css" />
                </Head>
                <body>
                    <Main />  {/* Ici, le contenu de votre page React sera rendu */}
                    <NextScript />  {/* Ajoute les scripts nécessaires pour Next.js */}

                    {/* Script supplémentaire pour afficher l'alerte */}
                    <script>
                        alert("Salut toi");
                    </script>
                    
                    {/* Script supplémentaires */}
                    <script src="assets/js/others/plugins-core/apexcharts.js"></script>
                    <script src="assets/js/others/plugins-script/apexchart.js"></script>
                    <script src="assets/js/others/plugins-core/simple-datatables.js"></script>
                    <script src="assets/js/others/plugins-script/simple-datatables-2.js"></script>
                    <script src="assets/js/others/plugins-core/handy-collapse.js"></script>
                    <script src="assets/js/others/plugins-script/handy-collapse.js"></script>
                    <script src="assets/js/others/plugins-core/perfect-scrollbar.js"></script>
                    <script src="assets/js/others/plugins-script/perfect-scrollbar.js"></script>
                    <script src="assets/js/others/plugins-core/alpine.min.js"></script>
                    <script src="assets/js/main.js"></script>
                </body>
            </Html>
        );
    }
}
