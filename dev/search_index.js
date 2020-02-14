var documenterSearchIndex = {"docs":
[{"location":"#CalibrateEmulateSample.jl-1","page":"Home","title":"CalibrateEmulateSample.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"CalibrateEmulateSample.jl solves parameter estimation problems using (approximate) Bayesian inversion. It is designed for problems that require running a computer model that is expensive to evaluate, but can also be used for simple models.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The computer model is supplied by the user – it is a forward model, i.e., it takes certain parameters and produces data that can then be compared with the actual observations. We can think of that model as a parameter-to-data map G(u) mathbbR^p rightarrow mathbbR^d. For example, G could be a global climate model or a model that predicts the motion of a robot arm. ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The data produced by the forward model are compared to observations y, which are assumed to be corrupted by additive noise eta, such that","category":"page"},{"location":"#","page":"Home","title":"Home","text":"beginequation\ny = G(u) + eta\nendequation","category":"page"},{"location":"#","page":"Home","title":"Home","text":"where the noise eta is drawn from a d-dimensional Gaussian with distribution mathcalN(0 Gamma_y).","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Given knowledge of the  observations y, the forward model G(u) mathbbR^p rightarrow mathbbR^d, and some information about the noise level such as its size or distribution (but not its value), the inverse problem we want to solve is to find the unknown parameters u.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"As the name suggests, CalibrateEmulateSample.jl breaks this problem into a sequence of three steps: calibration, emulation, and sampling. A comprehensive treatment of the calibrate-emulate-sample approach to Bayesian inverse problems can be found in Cleary et al., 2020.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"In a one-sentence summary, the calibrate step of the algorithm consists of an Ensemble Kalman inversion that is used to find good training points for a Gaussian process regression, which in turn is used as a surrogate (emulator) of the original forward model G in the subsequent Markov chain Monte Carlo sampling of the posterior distributions of the unknown parameters.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"CalibrateEmulateSample.jl contains the following modules:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Module Purpose\nEKI.jl Calibrate – Ensemble Kalman inversion\nGPEmulator.jl Emulate – Gaussian process regression\nMCMC.jl Sample – Markov chain Monte Carlo\nGModel.jl Forward model G – to be supplied/modified by the user!\nObservations.jl Structure to hold observations\nUtilities.jl Helper functions","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The best way to get started is to have a look at the examples!","category":"page"}]
}