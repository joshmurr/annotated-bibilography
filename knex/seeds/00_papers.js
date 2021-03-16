const papers = [
  {
    title: "Im2Vec: Synthesizing Vector Graphics without Vector Supervision",
    summary:
      "Vector graphics are widely used to represent fonts,  lo-gos,  digital  artworks,  and  graphic  designs.   But,  while  avast  body  of  work  has  focused  on  generative  algorithmsfor raster images, only a handful of options exists for vec-tor graphics.  One can always rasterize the input graphicand resort to image-based generative approaches, but thisnegates  the  advantages  of the  vector  representation.   Thecurrent alternative is to use specialized models that requireexplicit supervision on the vector graphics representationat training time. This is not ideal because large-scale high-quality vector-graphics datasets are difficult to obtain. Fur-thermore,  the  vector  representation  for  a  given  design  isnot unique,  so models that supervise on the vector repre-sentation are unnecessarily constrained.  Instead, we pro-pose a new neural network that can generate complex vec-tor graphics with varying topologies, and only requires in-direct supervision from readily-availablerastertraining im-ages (i.e., with no vector counterparts).  To enable this, weuse a differentiable rasterization pipeline that renders thegenerated vector shapes and composites them together ontoa raster canvas.   We demonstrate our method on a rangeof  datasets,  and  provide  comparison  with  state-of-the-artSVG-VAE and DeepSVG, both of which require explicit vec-tor graphics supervision.  Finally, we also demonstrate ourapproach on the MNIST dataset, for which no groundtruthvector  representation  is  available.",
    paper_id: "arXiv:2102.02798v1",
    url: "https://arxiv.org/pdf/2102.02798.pdf",
    code: "http://geometry.cs.ucl.ac.uk/projects/2020/Im2Vec/",
  },
  {
    title: "Attention Is All You Need",
    summary:
      "The dominant sequence transduction models are based on complex recurrent orconvolutional neural networks that include an encoder and a decoder.  The bestperforming models also connect the encoder and decoder through an attentionmechanism.  We propose a new simple network architecture, the Transformer,based solely on attention mechanisms, dispensing with recurrence and convolutionsentirely.  Experiments on two machine translation tasks show these models tobe superior in quality while being more parallelizable and requiring significantlyless time to train.  Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, includingensembles, by over 2 BLEU. On the WMT 2014 English-to-French translation task,our model establishes a new single-model state-of-the-art BLEU score of 41.8 aftertraining for 3.5 days on eight GPUs, a small fraction of the training costs of thebest models from the literature. We show that the Transformer generalizes well toother tasks by applying it successfully to English constituency parsing both withlarge and limited training data.",
    paper_id: "arXiv:1706.03762v5",
    url: "https://arxiv.org/pdf/1706.03762.pdf",
    code: null,
  },
  {
    title:
      "Learning Transferable Visual Models From Natural Language Supervision",
    summary:
      "State-of-the-art  computer  vision  systems  aretrained  to  predict  a  fixed  set  of  predeterminedobject categories.  This restricted form of super-vision limits their generality and usability sinceadditional labeled data is needed to specify anyother visual concept. Learning directly from rawtext about images is a promising alternative whichleverages a much broader source of supervision.We demonstrate that the simple pre-training taskof predicting which caption goes with which im-age is an efficient and scalable way to learn SOTAimage representations from scratch on a datasetof 400 million (image, text) pairs collected fromthe internet. After pre-training, natural languageis used to reference learned visual concepts (ordescribe new ones) enabling zero-shot transferof  the  model  to  downstream  tasks.   We  studythe performance of this approach by benchmark-ing  on  over  30  different  existing  computer  vi-sion datasets, spanning tasks such as OCR, ac-tion recognition in videos, geo-localization, andmany types of fine-grained object classification.The model transfers non-trivially to most tasksand is often competitive with a fully supervisedbaseline  without  the  need  for  any  dataset  spe-cific  training.   For  instance,  we  match  the  ac-curacy of the original ResNet-50 on ImageNetzero-shot without needing to use any of the 1.28million training examples it was trained on.",
    paper_id: "arXiv:2103.00020v1",
    url: "https://arxiv.org/pdf/2103.00020.pdf",
    code: "https://github.com/OpenAI/CLIP",
  },
];

exports.seed = function (knex) {
  return knex("papers")
    .del()
    .then(function () {
      return knex("papers").insert(
        papers.map((entry, id) => ({
          //id,
          ...entry,
        }))
      );
    });
};
