<script lang="ts">
  import { useMathJax } from '$lib/mathjax';
  useMathJax();
  
</script>

<head>
    <title>Independence Posets</title>
  <style>
    body {
      font-family: "Computer Modern Sans", sans-serif;
    }
  </style>
</head>

<main>
    <div class="title"><a class="atitle" href="https://dx.doi.org/10.4310/JOC.2019.v10.n3.a5">Independence Posets</a></div>
    <div class="authors">
        <a class="aauthors" href="http://www.lacim.uqam.ca/~hugh/">Hugh Thomas (UQAM)</a>
        <p style="display: inline-block; color: #ffcd6f; font-size: 2.66em; margin: 0px; padding: 0px;"> and </p>
        <a class="aauthors" href="https://personal.utdallas.edu/~nxw170830/index.html">Nathan Williams (UTD)</a>
      </div>
          <div class="tagline"><i>"What if a distributive lattice weren't a lattice?"</i></div>
	

    <div class="row">
      <div class="column left">
        <p>
            Let $$G$$ be a finite acyclic directed graph. The transitive closure of $G$ defines a 
            <span class="tooltip">poset
                <span class="tooltiptext">Which we call $G$-order</span>
            </span>.
            An <span style="color:#004db2"><i>independent set</i></span> $I \subseteq G$ is a set of pairwise non-adjacent vertices of $G$.
            A pair (<span style="color:#004db2">$D$</span>,<span style="color:#ffcd6f">$U$</span>) of independent sets of $G$ is called <span style="color:#004db2"><i>orthogonal</i></span> if there is no edge in $G$ from an element of $\D$ to an element of $\U$.  An orthogonal pair of independent sets $(\D,\U)$ is called <span style="color:#004db2"><i>tight</i></span> if whenever any element of $\D$ is <div class="tooltip">increased<span class="tooltiptext">removed and replaced by a larger element with respect to $G$-order</span></div> or any element of $\U$ is <div class="tooltip">decreased<span class="tooltiptext">removed and replaced by a smaller element with respect to $G$-order</span></div>, or a new element is added to either $\D$ or $\U$, then the result is no longer an orthogonal pair of independent sets.
       
</main>